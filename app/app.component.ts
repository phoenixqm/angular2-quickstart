import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:  ['app.component.css']

})

export class AppComponent {

  title = 'Tour of Heroes';


}
