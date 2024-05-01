import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { gender } from 'src/app/core/types/types';
import { User } from 'src/app/services/models';
//mport {gender} from 'src/app/core/types/'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
})
export class HomeFormComponent {
  @Input() user!: User;

  gendersSet: gender[] = ['MALE', 'FEMALE', 'ANY'];
  guestsAmount: (number | 'any')[] = [1, 2, 3, 4, 5, 'any'];

  form = new FormGroup({
    availability: new FormControl(null),
    location: new FormControl(''),
    guests: new FormControl(0),
    gender: new FormControl(null),
    kids: new FormControl(null),
    pets: new FormControl(null),
    smoking: new FormControl(null),
  });
}
