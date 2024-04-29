import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { Request } from 'src/app/services/models/request';

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
    { name: 'Odessa', hosts: ['host1', 'host2', 'host3'] },
  ];

  foundedHosts: string[] = [];

  isEdit: boolean = false;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    const req = this.formsService.currentRequest;
    if (req.id) {
      this.initForm(req);
      this.isEdit = true;
      this.updateProps();
    } else {
      this.isEdit = false;
    }
  }

  findHosts() {
    this.foundedHosts = this.hosts[0].hosts;
  }

  selectHost(host: string) {
    console.log(host);
    this.form.get('host')?.setValue(host);
  }

  openModal(req: any) {
    this.form.reset();
    this.initForm(req);
  }
  cancelForm() {
    this.formsService.setRequest({});
  }

  updateProps() {
    this.title = 'Edit my public trip';
  }

  onCreateRequest() {
    console.log(this.form);
  }

  initForm(req: Request) {
    this.form = new FormGroup({
      destination: new FormControl(req.location),
      arrival: new FormControl(req.from),
      departure: new FormControl(req.to),
      travelers: new FormControl(req.travelersAmount),
      description: new FormControl(req.message),
      host: new FormControl(req.receiver),
    });
  }
}
