import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilJugadorPage } from './perfil-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilJugadorPageRoutingModule {}
