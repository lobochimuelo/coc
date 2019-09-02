import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { CarreraComponent } from './components/carrera/carrera.component';
import { AcademicoComponent } from './components/academico/academico.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarreraComponent,
    AcademicoComponent,
    EstudiantesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
