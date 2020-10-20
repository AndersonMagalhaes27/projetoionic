import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteExcluirPageRoutingModule } from './cliente-excluir-routing.module';

import { ClientesExcluirPage } from './cliente-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteExcluirPageRoutingModule
  ],
  declarations: [ClientesExcluirPage]
})
export class ClienteExcluirPageModule {}
