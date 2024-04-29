import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  constructor(
    private router: Router
  ) {}

  verify() {
    this.router.navigate(['verify']);
  }

}
