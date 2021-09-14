
import { PersonaConsultaComponent } from './Pulsacion/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Pulsacion/persona-registro/persona-registro.component';
import {  Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'personaConsulta' , component: PersonaConsultaComponent},
  { path: 'personaRegistro', component: PersonaRegistroComponent }
  ];
export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});
