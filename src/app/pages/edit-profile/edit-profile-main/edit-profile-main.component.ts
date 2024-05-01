import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserHome, UserInfo } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AboutFormComponent } from '../about-form/about-form.component';
import { UsersService } from 'src/app/services/services';
import { Router } from '@angular/router';
import { HomeFormComponent } from '../home-form/home-form.component';

export type Tab = 'About' | 'My Home';
@Component({
  selector: 'app-edit-profile-main',
  templateUrl: './edit-profile-main.component.html',
  styleUrls: ['./edit-profile-main.component.css'],
})
export class EditProfileMainComponent implements OnInit {
  user: User = {} as User;
  @ViewChild(AboutFormComponent) aboutForm!: AboutFormComponent;
  @ViewChild(HomeFormComponent) homeForm!: HomeFormComponent;

  tabs: Tab[] = ['About', 'My Home'];
  isInfoFormActive: boolean = true;

  constructor(
    private storeService: StorageService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storeService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  updateUser() {
    if (this.isInfoFormActive) {
      this.saveUserInfo();
    } else {
      this.saveUserHome();
    }
  }

  saveUserHome() {
    const form = this.homeForm.form.value;
    const newUserHome: UserHome = {
      iamSmoker: undefined,
      ihaveKids: undefined,
      ihavePets: undefined,
      isAcceptingGuests: form.availability ?? false,
      kidFriendly: form.kids ?? false,
      maxGuests: form.guests ?? 0,
      otherInfo: undefined,
      petFriendly: form.pets ?? false,
      preferredGender: form.gender ?? undefined,
      smokingAllowed: form.smoking ?? false,
      wheelchairAllowed: undefined,
    };

    this.user.userHome = newUserHome;
    this.userService.updateUserInfo({ body: this.user }).subscribe((r) => {
      this.router.navigateByUrl('/profile');
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
    // console.log(this.user);
    this.userService.updateUserInfo({ body: this.user }).subscribe((r) => {
      this.router.navigateByUrl('/profile');
    });
  }

  cancelForm() {
    this.router.navigateByUrl('/profile');
  }

  swapTab(tab: Tab) {
    if (tab === 'About') {
      this.isInfoFormActive = true;
    } else {
      this.isInfoFormActive = false;
    }
  }
}
