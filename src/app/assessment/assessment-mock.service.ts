import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const questionsMockObject = [
    {
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
  },
  {
    'id': 2,
    'question': 'question 2',
    'answer': 'answer 2',
    'result': 1,
    'options': [
      {
        'id': 1,
        'text': 'option 1',
        'score': 2
      },
      {
        'id': 2,
        'text': 'option 2',
        'score': 4
      }
    ]
}
];

export class MockAssessmentService {
    getQuestions() {
        return Observable.of({});
    }
}
