import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Request} from 'src/app/services/models/request';
import {FormsService} from "../../../services/forms/forms.service";
import {
  AuthenticationService,
  RequestsService,
  UsersService,
} from 'src/app/services/services';

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

  hosts = [
    { name: 'Kharkiv', hosts: ['host1', 'host2', 'host3'] },
    { name: 'Odessa', hosts: ['host4', 'host5', 'host6'] },
  ];

  foundedHosts: string[] = [];

  isEdit: boolean = false;

  constructor(
    private formsService: FormsService,
    private reqServices: RequestsService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const req = this.formsService.currentRequest;
    if (req.id) {
      this.form = this.formsService.initRequestForm(req);
      this.isEdit = true;
      this.updateProps();
    } else {
      this.isEdit = false;
    }
  }

  onCreateRequest() {
    console.log(this.form);
    this.userService.getAuthenticatedUser().subscribe((resp: object) => {
      const respData = resp as { id: string };
      console.log(respData.id);
      //this.reqServices.sendAccommodationRequest()
    });
    //this.reqServices.sendAccommodationRequest()
  }

  findHosts() {
    this.foundedHosts = this.hosts[0].hosts;
  }

  selectHost(host: string) {
    this.form.get('host')?.setValue(host);
  }

  openModal(req: any) {
    // this.form.reset();
  }

  cancelForm() {
    this.formsService.setRequest({});
  }

  updateProps() {
    this.title = 'Edit my public trip';
  }
}
