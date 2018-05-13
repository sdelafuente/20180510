import { Component, OnInit, Input } from '@angular/core';

//Servicios
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

    @Input() idBorrar : number;
  constructor(public service : ApiService) { }

  ngOnInit() {
  }

  public BorrarMascota()
  {
      this.service.BorrarMascota('/borrar/',this.idBorrar)
      .subscribe(
         data => {
            
              return true;
         },
         error => {
           console.error("Error borrando mascota");
           //console.error(error);
           return false;//Observable.throw(error);
         }
      );
  }

}
