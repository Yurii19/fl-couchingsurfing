import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-my-home-tab',
  templateUrl: './my-home-tab.component.html',
  styleUrls: ['./my-home-tab.component.css'],
})
export class MyHomeTabComponent {
  @Input() user!: User;

  getAppeal(): string {
    const name = this.user.fullName?.split(' ');
    // const firstName = name[0]=== 'undefined' ? '': name[0];
    if (name) {
      return name[0] + "'s Preferences";
    } else {
      return 'User' + "'s Preferences";
    }
  }
}
