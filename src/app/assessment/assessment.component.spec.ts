import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AssessmentComponent } from './assessment.component';
import { AssessmentService } from '../services/assessment.service';
import { IQuestion } from '../shared';
import { MockAssessmentService, questionsMockObject } from './assessment-mock.service';

describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;
  let service: MockAssessmentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        { provide: AssessmentService, useClass: MockAssessmentService },
        { provide: Router, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AssessmentService);
    spyOn(service, 'getQuestions').and.returnValue(Observable.of(questionsMockObject));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display step 1 of 2 (questions length)', () => {
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('span'));
    el = de.nativeElement;
    fixture.detectChanges();

    expect(el.textContent).toContain(`Step 1 of ${component.questions.length}`);
  });

  it('should calculate score correctly', () => {
    expect(component.score).toEqual(5);
  });

  it('should take to next question', () => {
    component.nextQuestion();
    fixture.detectChanges();
    expect(component.currentQuestionIndex).toEqual(1);
  });

  it('should take to previous question', () => {
    component.currentQuestionIndex = component.questions.length - 1;
    component.previousQuestion();
    fixture.detectChanges();
    const expected = component.questions.length > 1 ? component.questions.length - 2 : 0;
    expect(component.currentQuestionIndex).toEqual(expected);
  });

  it('should take to Success screen upon completing assessment', () => {
    component.currentQuestionIndex = component.questions.length;
    fixture.detectChanges();
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('h4'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Successfully completed the assessment');
  });

  it('should show score on Success screen', () => {
    component.currentQuestionIndex = component.questions.length;
    fixture.detectChanges();
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;

    expect(el.textContent).toContain(`${component.score}`);
  });
});
