import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  isDarkMode: boolean = false;

  display: string = '';

  clear(): void {
    this.display = '';
  }

  addToDisplay(toAdd: string): void {
    this.display += toAdd;
  }

  calculateExpression(): void {
    try {
      this.display = eval(this.display);
    } catch {
      this.display = "Error!";
      setTimeout(() => this.display = '', 500);
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
