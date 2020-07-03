import { Component } from '@angular/core';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tegn Z Vectors and Fonts made easy';
  navbar = new TopnavbarComponent();
}
