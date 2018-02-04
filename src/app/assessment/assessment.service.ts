import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssessmentService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get('./assets/data/questions.json');
  }
}
