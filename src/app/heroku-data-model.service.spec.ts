import { TestBed, inject } from '@angular/core/testing';

import { HerokuDataModelService } from './heroku-data-model.service';

describe('HerokuDataModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerokuDataModelService]
    });
  });

  it('should be created', inject([HerokuDataModelService], (service: HerokuDataModelService) => {
    expect(service).toBeTruthy();
  }));
});
