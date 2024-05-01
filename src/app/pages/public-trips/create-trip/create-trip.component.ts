import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Request} from 'src/app/services/models/request';
import {FormsService} from "../../../services/forms/forms.service";
import {RequestsService, UsersService,} from 'src/app/services/services';
import {User} from "../../../services/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {
  @Input() title: string = 'Create Public Trip';
  @Input() button: string = ' New Public Trip';
  @Input() request: Request = {} as Request;

  form: FormGroup = new FormGroup({
    destination: new FormControl(''),
    arrival: new FormControl(''),
    departure: new FormControl(''),
    travelers: new FormControl(''),
    description: new FormControl(''),
    host: new FormControl(''),
  });

  tripId: string = '';
  availableHosts: User[] = [];
  selectedHostId: string = '';
  isHostEmpty: boolean = true;
  isEdit: boolean = false;
  location: string | null = null;
  page: number = 0;
  size: number = 1000;

  constructor(
    private formsService: FormsService,
    private requestsService: RequestsService,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const req = this.formsService.currentRequest;
    if (req.id) {
      this.tripId = req.id;
      this.form = this.formsService.initRequestForm(req);
      this.selectedHostId = req.receiver as string;
      this.isHostEmpty = false;
      this.isEdit = true;
      this.location = this.form.get('destination')?.value as string;
      this.updateProps();
    } else {
      this.isEdit = false;
    }
  }

  onCreateRequest() {
    console.log(this.form);
    if (!this.isHostEmpty) {
      this.usersService.getAuthenticatedUser().subscribe((resp: object) => {
        const sender = resp as { id: string };
        const request = this.formsService
          .createRequestFromFormValues(this.form.value, sender.id, this.selectedHostId);

        if (this.isEdit) {
          this.requestsService.updateRequest({
            requestId: this.tripId,
            body: request
          }).subscribe({
            next: (res) => console.log('Updated: ' + res),
            error: (err) => console.log(err)
          });
        } else {
          this.requestsService.sendAccommodationRequest({
            body: request
          }).subscribe({
            next: (res) => console.log('Created new request: ' + res),
            error: (err) => console.log(err)
          });
        }
      });

      this.router.navigate(['dashboard', 'public-trips']);
    }
  }

  findHosts() {
    this.location = this.form.get('destination')?.value as string;

    this.usersService.getHosts({
      location: this.location,
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.availableHosts = res.content as User[];
        console.log(`Available hosts ${this.availableHosts.length}`);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  selectHost(host: User) {
    this.selectedHostId = host.id as string;
    this.form.get('host')?.setValue(host.fullName);
    this.isHostEmpty = false;
  }

  cancelForm() {
    this.formsService.setRequest({});

    this.requestsService.deleteRequest({
      requestId: this.tripId
    }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });

    this.router.navigate(['dashboard', 'public-trips']);
  }

  updateProps() {
    this.title = 'Edit my public trip';
  }
}
