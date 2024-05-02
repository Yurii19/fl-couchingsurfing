import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent {
  @Input() user!: User;

}
