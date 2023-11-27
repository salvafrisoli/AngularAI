import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoComponent } from './components/auto/auto.component';
import { DuenioComponent } from './components/duenio/duenio.component';


@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router){

  }

  title = 'AngularAI';

  irAPagina(url: string): void{
    console.log(url)
    this.route.navigate([url])
  }
}
