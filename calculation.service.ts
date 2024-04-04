import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  calculateTotalStudents(courses: any[]) {
    let totalStudents = 0;
    for (let course of courses) {
      totalStudents += course.numGroups * course.studentsPerGroup;
    }
    return totalStudents;
  }
}