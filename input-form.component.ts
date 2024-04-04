import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  @Output() calculate = new EventEmitter<any>();

  courses = [
    { numGroups: 0, studentsPerGroup: 0 },
    { numGroups: 0, studentsPerGroup: 0 },
    { numGroups: 0, studentsPerGroup: 0 },
    { numGroups: 0, studentsPerGroup: 0 },
    { numGroups: 0, studentsPerGroup: 0 }
  ];

  submitForm() {
    this.calculate.emit(this.courses);
  }
}
