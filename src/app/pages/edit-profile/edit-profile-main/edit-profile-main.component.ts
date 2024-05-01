import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserInfo } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AboutFormComponent } from '../about-form/about-form.component';
import { UsersService } from 'src/app/services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-main',
  templateUrl: './edit-profile-main.component.html',
  styleUrls: ['./edit-profile-main.component.css'],
})
export class EditProfileMainComponent implements OnInit {
  user: User = {} as User;
  @ViewChild(AboutFormComponent) aboutForm!: AboutFormComponent;

  constructor(
    private storeService: StorageService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storeService.getUser().subscribe((user: User) => {
      this.user = user;
      console.log(user);
    });
  }

  saveUserInfo() {
    const form = this.aboutForm.form.value;

    const newUserInfo: UserInfo = {
      aboutMe: form.aboutText ?? '',
      age: 0,
      education: form.education ?? '',
      languages: this.aboutForm.languages ?? [],
      location: '',
      occupation: form.occupation ?? '',
      userPhotos: [''],
    };
    this.user.userInfo = newUserInfo;
    console.log(this.user);
    this.userService.updateUserInfo({ body: this.user }).subscribe((r) => {
      this.router.navigateByUrl('/profile');
    });
  }
}
