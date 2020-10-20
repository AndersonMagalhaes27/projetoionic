import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { ClienteServices } from '../services/cliente.service';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  lista: Cliente [] = [];
  constructor(private clienteServ : ClienteServices ) { }

  ngOnInit() {
    this.clienteServ.listaDeClientes().subscribe(response=>{
      // O servidor respondeu
     // console.log(response); // remover, apenas para testar no console
      this.lista = response;
      //console.log(this.lista); // remover, apenas para testar no console
    },err=>{
    })
  }

}
