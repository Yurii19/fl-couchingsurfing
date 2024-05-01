import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/models/user';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-edit-profile-aside',
  templateUrl: './edit-profile-aside.component.html',
  styleUrls: ['./edit-profile-aside.component.css'],
})
export class EditProfileAsideComponent {
  user$!: Observable<User>;

  constructor(private storeService: StorageService) {}
  ngOnInit(): void {
    this.user$ = this.storeService.getUser();
  }
}
