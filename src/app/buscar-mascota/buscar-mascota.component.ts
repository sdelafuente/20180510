import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../mascota';
import { Observable } from 'rxjs/Observable';
//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

    public miMascota = new Mascota();
    public nombre : string;
    @Output() enviarMascota : EventEmitter<any> = new EventEmitter<any>();

    constructor(public service : ApiService) { }

     ngOnInit() {
      }

    Buscar(nombre){

    this.service.traerMascota(nombre)
      .then(
          data => {
              if(typeof data!== "undefined"){
                  this.miMascota = data;
                  this.enviarMascota.emit(this.miMascota);
              }
      });
  }

}
