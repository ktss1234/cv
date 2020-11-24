import { Component } from '@angular/core';
import { faAt, faBirthdayCake, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';
  faAt = faAt;
  birthday = faBirthdayCake;
  mobile = faMobileAlt;
  constructor(){

  }
}
