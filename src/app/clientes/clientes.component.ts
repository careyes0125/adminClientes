import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from './clientes.service';
import { ClientModel } from 'src/models/client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {


  constructor( private clientService: ClientesService,  private modalService: NgbModal) { 

    this.clientService.getClients().subscribe(resp=>{this.clientes = resp.body}, error=>{
      console.log(error);
    })
  }

  public clientes:Array<ClientModel>;

  public searchClient:any;

  ngOnInit() {
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  search(){
    this.clientService.getClientbyId(this.searchClient).subscribe(resp=>{
      this.clientes=[resp.body]},error=>{console.log(error)})

  }


}
