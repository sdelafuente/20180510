import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { ApiService } from './servicio/api.service';
import { BotonBorrarComponent } from './boton-borrar/boton-borrar.component';
import { BuscarMascotaComponent } from './buscar-mascota/buscar-mascota.component';
import { MostrarComponent } from './mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarMascotasComponent,
    BotonBorrarComponent,
    BuscarMascotaComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
