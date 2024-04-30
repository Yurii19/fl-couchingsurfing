import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/services';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  constructor(private userServices: UsersService) {}
  ngOnInit(): void {
    this.userServices.getAuthenticatedUser().subscribe((user: User) => {
      console.log(user);
      this.user = user;
    });
  }
}
