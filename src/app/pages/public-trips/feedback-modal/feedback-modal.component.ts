import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from 'src/app/services/models';
import { ReviewsService } from 'src/app/services/services';
import { Request } from 'src/app/services/models/request';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent {
  @Input() trip: Request = {};
  @Input() isHost: boolean = false;
  @Output() closeModal = new EventEmitter();

  feedback = '';
  rating = 0;
  wouldRepeat = false;

  constructor(private reviewService: ReviewsService) {}

  close() {
    this.closeModal.emit();
  }
  save() {
    console.log(this.trip);

    const review: Review = {
      requestId: this.trip.id,
      reviewMessage: this.feedback,
      receiverId: this.trip.receiver,
      senderId: this.trip.sender,
      rating: this.rating,
      serviceType: this.trip.serviceType,
      wouldRepeat: this.wouldRepeat,
    };
    if (this.isHost) {
      review.serviceType = 'ACCOMMODATION_PROVISION';
      review.receiverId = this.trip.sender;
      review.senderId = this.trip.receiver;
    }
    console.log(review);
    this.reviewService.addReview$Response({ body: review }).subscribe((d) => {
      this.close();
    });
  }

  updateRating(i: number) {
    this.rating = i;
  }

  resetRating() {
    this.rating = 0;
  }
}
