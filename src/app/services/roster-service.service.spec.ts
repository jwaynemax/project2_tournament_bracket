import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster-service.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should not allow null names', () => {
    expect(() => {
      service.addContestant(null);
    }).toThrow();
  });

  it ('should not allow empty strings for names', () => {
    expect(() => {
      service.addContestant('');
    }).toThrow();
  });

  it ('should not allow duplicate contestants', () => {
    service.addContestant('John')
    expect(() => {
      service.addContestant('John');
    }).toThrow();
  });

    it ('should add one contestant', () => {
      service.addContestant('John');
      expect(service.getContestants().length == 1).toBeTruthy();
  });

  it ('should add several contestants', () => {
    service.addContestant('John');
    service.addContestant('Jane');
    service.addContestant('Ron');
    expect(service.getContestants().length == 3).toBeTruthy();
});


});
