import {Injectable} from '@angular/core';
import { Request } from "../models/request";
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  currentRequest: Request = {} as Request;

  constructor() {}

  setRequest(r: Request) {
    this.currentRequest = r;
  }

  initRequestForm(req: Request) {
    return new FormGroup({
      destination: new FormControl(req.location),
      arrival: new FormControl(req.from),
      departure: new FormControl(req.to),
      travelers: new FormControl(req.travelersAmount),
      description: new FormControl(req.message),
      host: new FormControl(req.receiver),
    });
  }

  createRequestFromFormValues(formValues: any, id: string): Request{
    return {
      id: 'string',
      sender: id,
      receiver: 'string',
      travelersAmount: formValues.travelers,
      from: formValues.departure,
      to: formValues.arrival,
      message: formValues.description,
      serviceType: 'ACCOMMODATION_PROVISION',
      location: formValues.destination,
      requestStatus: 'CREATED',
    };
  }
}
