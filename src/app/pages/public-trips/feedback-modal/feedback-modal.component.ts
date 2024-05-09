import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from 'src/app/services/models';
import {ReviewsService} from 'src/app/services/services';
import {Request} from 'src/app/services/models/request';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent implements OnInit {
  @Input() trip: Request = {};
  @Input() isHost: boolean = false;
  @Output() closeModal = new EventEmitter();
  @Input() isModalShown = true;
  isReadOnly = false;

  feedback = '';
  rating = 0;
  wouldRepeat = false;

  constructor(private reviewService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewService.getReviewByRequestId({
      requestId: this.trip.id as string,
      serviceType: this.isHost ? 'ACCOMMODATION_PROVISION' : 'ACCOMMODATION_REQUEST'
    }).subscribe({
      next: (res) => {
        if (res) {
          this.feedback = res.reviewMessage as string;
          this.rating = res.rating as number;
          this.wouldRepeat = res.wouldRepeat as boolean;
          this.isReadOnly = true;
        }
      },
      error: (err) => console.log('Error during retrieving Review')
    })
  }

  close() {
    this.isModalShown = false;
    this.closeModal.emit();
  }

  save() {
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
    this.reviewService.addReview$Response({body: review}).subscribe((d) => {
      this.close();
    });
  }

  updateRating(i: number) {
    this.rating = i;
  }

  resetRating() {
    this.rating = 0;
  }
  checkRepeat(){
    this.wouldRepeat = !this.wouldRepeat;
  }
}
