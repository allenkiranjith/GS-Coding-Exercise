import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentQuestionComponent } from './assessment-question.component';
import { IQuestion } from '../../shared/IQuestion';

describe('AssessmentQuestionComponent', () => {
  let component: AssessmentQuestionComponent;
  let fixture: ComponentFixture<AssessmentQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentQuestionComponent);
    component = fixture.componentInstance;

    component.question = <any>{
      'id': 1,
      'question': 'question 1',
      'answer': 'answer 1',
      'result': 2,
      'options': [
        {
          'id': 1,
          'text': 'option 1',
          'score': 2
        },
        {
          'id': 2,
          'text': 'option 2',
          'score': 3
        }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
