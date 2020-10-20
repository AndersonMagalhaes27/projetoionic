import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClienteService } from '../services/cliente.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-cliente-excluir',
  templateUrl: './cliente-excluir.page.html',
  styleUrls: ['./cliente-excluir.page.scss'],
})
export class ClientesExcluirPage implements OnInit {
  cliente: unknown;


  constructor(private clienteServ : ClienteService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private template : TemplateService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.clienteServ.buscaPorId(id).subscribe(response=>{
        this.cliente = response;
        
      })

    })

  }

  excluir(){

  this.template.loading.then(load => {

      load.present();

      this.clienteServ.excluir(this.cliente).subscribe(response => {

        load.dismiss();
        this.navCtrl.navigateForward(['/cliente']);
      }, erro => {
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }

}