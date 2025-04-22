import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';

  pressKey(key: string): void {
    if (key === 'C') {
      this.display = '';
    } else if (key === '←') {
      this.display = this.display.slice(0, -1);
    } else if (key === '=') {
      try {
        this.display = eval(this.display).toString(); 
      } catch {
        this.display = 'Error';
      }
    } else {
      this.display += key;
    }
  }
}
