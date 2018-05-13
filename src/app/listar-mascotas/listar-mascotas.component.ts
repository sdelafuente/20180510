import { Component, OnInit,Input } from '@angular/core';
import { BotonBorrarComponent } from '../boton-borrar/boton-borrar.component';
import { Mascota } from '../mascota';

//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

    //Array de personas
    @Input() arrayMascotas : Array<any>;

    private estaCargado : boolean = false;

    constructor(public service : ApiService) {
        this.arrayMascotas = new Array<any>();
    }

    ngOnInit() {
        this.buscarTodos();
    }

    //Traigo todas las personas
    buscarTodos(){

        this.service.traerMascotas().then(
            data => {
                this.estaCargado = true;
                this.arrayMascotas = data;
        });
    }

}
