import {Injectable} from '@angular/core';
import {Request} from "../models/request";
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from "../services/users.service";
import {User} from "../models/user";
import { format, parseISO } from 'date-fns';

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
      arrival: new FormControl(format(new Date(req.from as number), 'yyyy-MM-dd')),
      departure: new FormControl(format(new Date(req.to as number), 'yyyy-MM-dd')),
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
      from: parseISO(formValues.arrival).valueOf(),
      to: parseISO(formValues.departure).valueOf(),
      message: formValues.description,
      serviceType: 'ACCOMMODATION_REQUEST',
      location: formValues.destination,
      requestStatus: 'CREATED',
    };
  }
}
