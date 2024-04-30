import {Component} from '@angular/core';
import {Request} from 'src/app/services/models/request';
import {FormsService} from "../../services/forms/forms.service";

@Component({
  selector: 'app-public-trips',
  templateUrl: './public-trips.component.html',
  styleUrls: ['./public-trips.component.css'],
})
export class PublicTripsComponent {
  createTripVisible = false;

  trips: Request[] = [
    {
      id: '662ccda103898e29d2dfda34',
      sender: '6625213d2652662ac801f3b1',
      receiver: '662507fb48f352542d2dab6b',
      travelersAmount: 1,
      from: 1714176000000,
      to: 1714435200000,
      message: 'string',
      serviceType: 'ACCOMMODATION_REQUEST',
      location: 'Odessa, Ukraine',
      requestStatus: 'CREATED',
    },
    {
      id: '662ccda103898e29d2dfda34',
      sender: '6625213d2652662ac801f3b1',
      receiver: '662507fb48f352542d2dab6b',
      travelersAmount: 1,
      from: 1714176000000,
      to: 1714435200000,
      message: 'string',
      serviceType: 'ACCOMMODATION_REQUEST',
      location: 'Kharkiv, Ukraine',
      requestStatus: 'CREATED',
    },
  ];

  constructor(private formsService: FormsService) {
  }

  edit(trip: Request) {
    this.formsService.setRequest(trip)
  }
}
