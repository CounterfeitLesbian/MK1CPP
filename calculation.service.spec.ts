import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total students correctly', () => {
    const courses = [
      { numGroups: 2, studentsPerGroup: 30 },
      { numGroups: 3, studentsPerGroup: 25 },
      { numGroups: 1, studentsPerGroup: 20 },
      { numGroups: 4, studentsPerGroup: 35 },
      { numGroups: 2, studentsPerGroup: 40 }
    ];
    const totalStudents = service.calculateTotalStudents(courses);
    expect(totalStudents).toEqual(395);
  });
});
