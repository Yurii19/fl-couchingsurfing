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
  @Output() cloceModal = new EventEmitter();

  feedback = '';

  constructor(private reviewService: ReviewsService) {}

  close() {
    this.cloceModal.emit();
  }
  save() {
    const review: Review = {
      receiverId: this.trip.receiver ?? undefined,
      requestId: this.trip.id ?? undefined,
      reviewMessage: this.feedback,
      senderId: this.trip.sender ?? undefined,
      rating: 0,
      serviceType: this.trip.serviceType ?? undefined,
      wouldRepeat: true,
    };
    this.reviewService.addReview$Response({ body: review }).subscribe((d) => {
      this.close();
    });
  }
}
