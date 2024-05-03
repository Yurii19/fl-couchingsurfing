import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent {
  @Input() trip: any = 'trip';
  @Output() cloceModal = new EventEmitter();

  feedback = '';

  close() {
    this.cloceModal.emit();
  }
  save() {
    console.log(this.feedback);
    this.close();
  }
}
