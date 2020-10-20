import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesAtualizarPage } from './clienteatualizarpage';



const routes: Routes = [
  {
    path: '',
    component: ClientesAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAtualizarPageRoutingModule {}
