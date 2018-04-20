import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public navToggle = true;

  toggled(): boolean {
    return this.navToggle === true
    ? this.navToggle = false
    : this.navToggle = true;
  }

}
