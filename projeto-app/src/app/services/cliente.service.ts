import { Injectable } from '@angular/core';
import { from, fromEventPattern, Observable, observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class ClienteServices {
    cliente : Cliente = new Cliente();
    constructor( private firestore: AngularFirestore){
    }
     listaDeClientes() : Observable<any>{
        // observable -> Aguardar resposta do servidor 

        return from(new Observable(observe =>{// Converter para observable

            //  this.firestore.collection('cliente')-> Selecionar a coleção no firestore
            // .snapshotChanges().subscribe() -> Tentar buscar no servidor
            // reponse - > dados baixados do servidor, os clientes
            this.firestore.collection('cliente').snapshotChanges().subscribe(response=>{
                //transforamar response em array de clietnes
               let lista:Cliente [] = [];
                response.map(obj=>{
                     //será repetido para cada registro
                    let cliente: Cliente = new Cliente();
                    //obj.payload.doc.data() -> Dados do cliente
                    cliente.setData(obj.payload.doc.data());
                    cliente.id = obj.payload.doc.id; //inserindo ID
                    lista.push(cliente);// adicionado o cliente na lista // push é adicionar
                   
                });
                observe.next(lista);
            })

         }))

     }
    
}