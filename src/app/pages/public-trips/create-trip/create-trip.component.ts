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
  });

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    const req = this.formsService.currentRequest;
    if (req.id) {
      this.initForm(req);
      this.updateProps();
    }
  }

  openModal(req: any) {
    this.form.reset();
    this.initForm(req);
  }
  cancelForm() {
    this.formsService.setRequest({});
  }

  updateProps() {
    this.title = 'Hello world';
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
    });
  }
}
