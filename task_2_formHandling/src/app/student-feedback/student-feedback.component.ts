import { Component } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  studentName: any = '';
  batchNumber: any = '';
  feedbackText: any = '';
  feedbackList :any = [];

  onSubmit(myForm:any) {
    // Collect the feedback data
    this.feedbackList.push({
      studentName : this.studentName,
      batchNumber: this.batchNumber,
      feedbackText : this.feedbackText
    });

    // Reset form fields
    this.studentName = '';
    this.batchNumber = '';
    this.feedbackText = '';
  }
}
