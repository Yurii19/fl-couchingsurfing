import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { gender } from 'src/app/core/types/types';
import { User } from 'src/app/services/models';
//mport {gender} from 'src/app/core/types/'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
})
export class HomeFormComponent implements OnInit {
  @Input() user!: User;

  gendersSet: gender[] = ['MALE', 'FEMALE', 'ANY'];
  guestsAmount: (number | 'any')[] = [1, 2, 3, 4, 5, 'any'];

  form = new FormGroup({
    availability: new FormControl(),
    guests: new FormControl(0),
    gender: new FormControl(),
    kids: new FormControl(),
    pets: new FormControl(),
    smoking: new FormControl(),
  });

  ngOnInit(): void {
    this.initFormValues();
  }
  initFormValues() {
    this.form.patchValue({
      availability: this.user.userHome?.isAcceptingGuests ?? undefined,
      guests: this.user.userHome?.maxGuests ?? 0,
      gender: this.user.userHome?.preferredGender ?? undefined,
      kids: this.user.userHome?.kidFriendly ?? undefined,
      pets: this.user.userHome?.petFriendly ?? undefined,
      smoking: this.user.userHome?.smokingAllowed ?? undefined,
    });
  }
}
