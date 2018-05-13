import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import { Mascota } from '../mascota';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    urlC = 'http://localhost:8080';
    mascota = new Mascota();
  constructor( public http: Http ) { }

  public traerMascotas()
  {
      return this.http.get( this.urlC  + "/mascota/")
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
  }

  public traerMascota(nombre)
  {
      return this.http.get( this.urlC  + "/mascota/" + nombre)
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
  }

  public BorrarMascota( url: string, id: any )
  {
    this.mascota.id = id;
      return this.http
      .post(this.urlC  + '/mascota' + url, this.mascota )
      .map((res: Response) => res.json());
  }

  private extractData ( res: Response )
  {
      return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
      return error;
  }

}
