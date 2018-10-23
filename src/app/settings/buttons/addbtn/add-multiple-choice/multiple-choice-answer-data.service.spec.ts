import { TestBed } from '@angular/core/testing';

import { MultipleChoiceAnswerDataService } from './multiple-choice-answer-data.service';

describe('MultipleChoiceAnswerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleChoiceAnswerDataService = TestBed.get(MultipleChoiceAnswerDataService);
    expect(service).toBeTruthy();
  });
});
