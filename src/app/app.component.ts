import { Component } from '@angular/core';
import { Mascota } from './mascota';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public miMascota = new Mascota();
 

  Mascota(evento){
      this.miMascota =(evento);
  }

}
