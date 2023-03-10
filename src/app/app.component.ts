import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';

  onButtonClick() {
    this.password = 'demo password';
  }

  getPassword() {
    return this.password;
  }
  getName() {
    return 'Alex';
  }
}
