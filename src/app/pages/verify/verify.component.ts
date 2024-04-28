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
    if (this.imageUrl != '') {
      this.usersService.getAuthenticatedUser()
        .subscribe({
          next: (res) => {
            this.authenticatedUser = res;

            console.log(res);

            this.verificationService.verifyVerificationApiV1Post({
              body: {
                fullname: this.authenticatedUser.fullName,
                passport_img: this.imageUrl
              }
            }).subscribe({
              next: (res) => {
                console.log(res.is_verified);
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
    } else {
      this.responseMessage = 'Please select image!'
    }
  }

  clear() {
    this.imageUrl = '';
  }
}
