import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-edit-profile-main',
  templateUrl: './edit-profile-main.component.html',
  styleUrls: ['./edit-profile-main.component.css'],
})
export class EditProfileMainComponent implements OnInit {
 // @Input() user: User = {} as User;
  user: User = {} as User;

  constructor(private storeService: StorageService) {}
  ngOnInit(){
    this.storeService.getUser().subscribe((user: User)=>{
      this.user = user;
    })
  }
}
