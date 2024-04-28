import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {UsersService} from "../../services/services/users.service";
import {User} from "../../services/models/user";
import {ApiService} from "../../verification/services/api.service";

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  imageUrl: string = '';
  responseMessage: string = '';
  authenticatedUser!: User;

  constructor(
    private usersService: UsersService,
    private verificationService: ApiService
  ) {
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }

  verify() {
    if (this.imageUrl === '') {
      this.responseMessage = 'Please select image!';
      return;
    }
    this.usersService.getAuthenticatedUser()
      .subscribe({
        next: (user) => {
          console.log(user);

          this.verificationService.verifyVerificationApiV1Post({
            body: {
              fullname: user.fullName,
              passport_img: this.imageUrl
            }
          }).subscribe({
            next: (verificationResponse) => {
              console.log(verificationResponse);

              if (verificationResponse.is_verified) {
                this.usersService.updateUserInfo({
                  body: {
                    isVerified: verificationResponse.is_verified
                  }
                }).subscribe({
                  next: (updatedUser) => {
                    console.log('User has been updated successfully!');
                    console.log(updatedUser);
                  },
                  error: (err) => {
                    console.log(`User updating error: ${err}`);
                  }
                });

                console.log('User has been verified successfully!');
              }
            },
            error: (err) => {
              console.log(err);
              if (err.error.status_message)
                this.responseMessage = err.error.status_message;
            }
          });
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  clear() {
    this.imageUrl = '';
  }
}
