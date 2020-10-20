import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesExcluirPage } from './cliente-excluir.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteExcluirPageRoutingModule {}
