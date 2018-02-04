import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion, IQuestionOption } from '../../shared';

@Component({
  selector: 'gs-assessment-question',
  templateUrl: './assessment-question.component.html',
  styleUrls: ['./assessment-question.component.scss']
})
export class AssessmentQuestionComponent {
  @Input() question: IQuestion;
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  selectOption(option: IQuestionOption) {
    this.question.result = option.id;
    this.optionSelected.emit(this.question);
  }
}
