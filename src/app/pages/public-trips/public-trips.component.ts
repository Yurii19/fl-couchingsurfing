import {Component, OnInit} from '@angular/core';
import {Request} from 'src/app/services/models/request';
import {FormsService} from "../../services/forms/forms.service";
import {RequestsService} from "../../services/services/requests.service";

@Component({
  selector: 'app-public-trips',
  templateUrl: './public-trips.component.html',
  styleUrls: ['./public-trips.component.css'],
})
export class PublicTripsComponent implements OnInit {
  page: number = 0;
  size: number = 1000;

  trips: Request[] = [];

  constructor(
    private formsService: FormsService,
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.requestsService.getOutgoingRequests({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.trips = res.content as Request[];
        console.log('Requests retrieved.');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  edit(trip: Request) {
    this.formsService.setRequest(trip)
  }
}
