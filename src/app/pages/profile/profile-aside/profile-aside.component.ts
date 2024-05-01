import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/models/user';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profile-aside',
  templateUrl: './profile-aside.component.html',
  styleUrls: ['./profile-aside.component.css'],
})
export class ProfileAsideComponent implements OnInit {
  @Input() user: User = {} as User;
  user$!: Observable<User>;

  constructor(private storeService: StorageService) {}

  ngOnInit(): void {
    this.user$ = this.storeService.getUser();
  }
}
