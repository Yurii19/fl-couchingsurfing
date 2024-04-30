import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-profile-aside',
  templateUrl: './profile-aside.component.html',
  styleUrls: ['./profile-aside.component.css'],
})
export class ProfileAsideComponent implements OnInit, OnChanges {
  @Input() user: User = {} as User;

  ngOnInit(): void {
    // console.log(this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    console.log(this.user);
  }
}
