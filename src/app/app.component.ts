import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'couchsurfing-frontend';

  headerVisible = true;
  subscribtions$!: Subscription;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.subscribtions$ = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((eventData: object) => {
        const data = eventData as NavigationEnd;
        if (data.url === '/register' || data.url === '/login') {
          this.headerVisible = false;
        } else this.headerVisible = true;
      });
  }

  ngOnDestroy(): void {
    this.subscribtions$.unsubscribe();
  }
}
