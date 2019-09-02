import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { AcademicoComponent } from './components/academico/academico.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';



const routes: Routes = [

  // { path: 'inicio', component: AppComponent },
  { path: 'nav', component: AppComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'academico', component: AcademicoComponent },
  { path: 'estudiantes', component: EstudiantesComponent },

  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }