import {Injectable} from '@angular/core';
import {Request} from "../models/request";
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  currentRequest: Request = {} as Request;

  constructor(
    private usersService: UsersService
  ) {}

  setRequest(r: Request) {
    this.currentRequest = r;
  }

  initRequestForm(req: Request) {
    const formGroup = new FormGroup({
      destination: new FormControl(req.location),
      arrival: new FormControl(moment(req.from).format('YYYY-MM-DD')),
      departure: new FormControl(moment(req.to).format('YYYY-MM-DD')),
      travelers: new FormControl(req.travelersAmount),
      description: new FormControl(req.message),
      host: new FormControl(''),
    });

    this.usersService.getUserById({userId: req.receiver as string}).subscribe({
      next: (res) => {
        const host = res as User;
        console.log('Host was found: ' + host.id);

        formGroup.get('host')?.setValue(host.fullName as string);
      },
      error: (err) => {
        console.log(err);
      }
    });

    return formGroup;
  }

  createRequestFromFormValues(formValues: any, senderId: string, receiverId: string): Request {
    return {
      sender: senderId,
      receiver: receiverId,
      travelersAmount: formValues.travelers,
      from: moment(formValues.arrival, 'YYYY-MM-DD').valueOf(),
      to: moment(formValues.departure, 'YYYY-MM-DD').valueOf(),
      message: formValues.description,
      serviceType: 'ACCOMMODATION_REQUEST',
      location: formValues.destination,
      requestStatus: 'CREATED',
    };
  }
}
