import { TestBed, inject } from '@angular/core/testing';

import { AssessmentService } from './assessment.service';
import { HttpClientModule } from '@angular/common/http';

describe('AssessmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([AssessmentService], (service: AssessmentService) => {
    expect(service).toBeTruthy();
  }));
});
