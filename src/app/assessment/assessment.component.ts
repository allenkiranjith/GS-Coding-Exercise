import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AssessmentService } from './assessment.service';
import { IQuestion } from '../shared';

@Component({
  selector: 'gs-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  providers: [ AssessmentService ]
})
export class AssessmentComponent implements OnInit {
  questions: IQuestion[];
  currentQuestionIndex: number;

  constructor(private assessmentService: AssessmentService, private router: Router) { }

  ngOnInit() {
      this.initialize();
  }

  initialize() {
    this.assessmentService.getQuestions().subscribe((results: any) => {
      this.questions = results;
      this.currentQuestionIndex = 0;
    });
  }

  nextQuestion() {
    this.currentQuestionIndex = this.currentQuestionIndex < this.questions.length
                                ? ++this.currentQuestionIndex
                                : this.currentQuestionIndex;
  }

  previousQuestion() {
    this.currentQuestionIndex = this.currentQuestionIndex > 0
                                ? --this.currentQuestionIndex
                                : this.currentQuestionIndex;
  }

  optionSelected(question: IQuestion) {
    // Adding timeout so user can see the selected answer before redirecting to next question
    setTimeout(() => this.nextQuestion(), 300);
  }

  get score() {
    let score = 0;
    this.questions.forEach(question => score += question.options.find(option => option.id === question.result).score);
    return score;
  }

  restartAssessment() {
    this.router.navigate(['/assessment']);
    this.initialize();
  }

}
