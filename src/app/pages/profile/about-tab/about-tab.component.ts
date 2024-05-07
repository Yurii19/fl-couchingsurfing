import {Component, Input, OnInit} from '@angular/core';
import {User} from 'src/app/services/models';
import {ReviewsService} from "../../../services/services/reviews.service";
import {forkJoin} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/services/users.service";

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {
  @Input() user!: User;

  references: number = 0;

  constructor(
    private usersServices: UsersService,
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('id');

    if (!userId) {
      this.usersServices.getAuthenticatedUser().subscribe((res) => {
        userId = res.id as string;
      });
    }

    const accommodationProvision$ = this.reviewsService.getAllIncomingReviews({
      userId: userId as string,
      serviceType: 'ACCOMMODATION_PROVISION'
    });

    const accommodationRequest$ = this.reviewsService.getAllIncomingReviews({
      userId: userId as string,
      serviceType: 'ACCOMMODATION_REQUEST'
    });

    forkJoin([accommodationProvision$, accommodationRequest$])
      .subscribe(([provisionRes, requestRes]) => {
        this.references += provisionRes.length + requestRes.length;
      });
  }

}
