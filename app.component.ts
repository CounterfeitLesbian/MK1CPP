import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CalculationService } from './module_1/calculation.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonicModule],
})
export class AppComponent {
  showResults = false;
  results: any;

  constructor(private calculationService: CalculationService) {}

  onCalculate(courses: any[]) {
    this.results = {
      totalStudents: this.calculationService.calculateTotalStudents(courses)
    };
    this.showResults = true;
  }
}