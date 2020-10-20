import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteAtualizarPageRoutingModule } from './cliente-atualizar-routing.module';
import { ClientesAtualizarPage } from './clienteatualizarpage';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAtualizarPageRoutingModule
  ],
  declarations: [ClientesAtualizarPage]
})
export class ClienteAtualizarPageModule {}
