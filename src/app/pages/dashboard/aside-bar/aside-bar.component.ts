import {Component, OnInit} from '@angular/core';
import {User} from "../../../services/models/user";
import {UsersService} from "../../../services/services/users.service";

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {

  currentUser: User = {};

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getAuthenticatedUser().subscribe({
      next: (res) => {
        this.currentUser = res;
        console.log(`Logged user: ${res.id}`);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
