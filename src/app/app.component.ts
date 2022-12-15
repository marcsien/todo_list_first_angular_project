import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';

  getFooter() : string
  {
    return '2022 © Lista zadań zbudowana w Angularze.';
  }

  get footer() : string
  {
    return '2022 © Lista zadań zbudowana w Angularze.';
  }
}