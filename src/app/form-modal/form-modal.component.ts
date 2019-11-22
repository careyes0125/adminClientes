import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModel } from 'src/models/client.model';
import { ClientesService } from '../clientes/clientes.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  client: FormGroup;

  

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private clientService: ClientesService) { 
    this.createForm();

    
  }

  private createForm() {
    this.client= this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.email]],
      startDate:['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.client.value.name);

    let newClient= new ClientModel();

    newClient.businessId=this.client.value.name;
    newClient.phone=this.client.value.phone;
    newClient.email=this.client.value.email;
    newClient.dateAdded=this.client.value.startDate;
    newClient.sharedKey=this.client.value.email.split('@')[0];

    this.clientService.postClient(newClient).subscribe(resp=>{console.log(resp); window.location.reload();}, error=>{console.log(error)})

    
    this.closeModal();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
