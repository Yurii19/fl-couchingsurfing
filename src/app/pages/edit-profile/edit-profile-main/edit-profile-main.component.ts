import {Component, OnInit, ViewChild} from '@angular/core';
import {User, UserHome, UserInfo} from 'src/app/services/models';
import {StorageService} from 'src/app/services/storage/storage.service';
import {AboutFormComponent} from '../about-form/about-form.component';
import {UsersService} from 'src/app/services/services';
import {Router} from '@angular/router';
import {HomeFormComponent} from '../home-form/home-form.component';

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
  ) {
  }

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
      iamSmoker: form.iamSmoker ?? false,
      ihaveKids: form.ihaveKids ?? false,
      ihavePets: form.ihavePets ?? false,
      isAcceptingGuests: form.availability ?? false,
      kidFriendly: form.kids ?? false,
      maxGuests: form.guests ?? 0,
      otherInfo: form.otherInfo ?? undefined,
      petFriendly: form.pets ?? false,
      preferredGender: form.gender ?? undefined,
      smokingAllowed: form.smoking ?? false,
      wheelchairAllowed: form.disabledPeople ?? false,
    };

    this.user.userHome = newUserHome;
    console.log('Updated user home');
    console.log(newUserHome);
    this.userService.updateUserInfo({body: this.user}).subscribe((r) => {
      this.router.navigateByUrl('/profile');
    });
  }

  saveUserInfo() {
    const form = this.aboutForm.form.value;
    const imgUrl = this.aboutForm.imageUrl;

    const newUserInfo: UserInfo = {
      aboutMe: form.aboutText ?? undefined,
      age: form.age ?? undefined,
      education: form.education ?? undefined,
      languages: this.aboutForm.languages ?? [],
      location: form.location ?? undefined,
      occupation: form.occupation ?? undefined,
      userPhoto: imgUrl ?? undefined,
    };
    this.user.userInfo = newUserInfo;
    console.log('Updated user info');
    console.log(newUserInfo);
    this.userService.updateUserInfo({body: this.user}).subscribe((r) => {
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
