
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QAPorts } from './qaPorts';
import { DevPorts } from './devPorts';
import { ProdPorts } from './prodPorts';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Configuration {

  constructor(
    private qaPorts: QAPorts,
    private devPorts: DevPorts,
    private prodPorts: ProdPorts
  ) {

    
    this.servidor = environment.ip;
    this.validarAmbiente();
    this.crearDireccionServicios();
    
  }

  private projectName='api';

  public headers= new HttpHeaders(
  {'key': 'Content-Type',
  'Access-Control-Allow-Origin':'*',
  'name': 'Content-Type',
  'value': 'application/json',
  'type': 'text'})

  private servidor = environment.ip;
  private generalPort: String;

  private apiUrlClients = this.projectName+'/clientes';
  public clients: string;

  
  
  validarAmbiente() {

    switch (environment.ambiente) {
      case 'qa': {
        this.generalPort= this.qaPorts.generalPort;
       
        break;
      }
      case 'dev': {

        this.generalPort= this.devPorts.generalPort;
    
        break;
      }

      case 'prod': {

        this.generalPort = this.prodPorts.generalPort;

      }
    }
  }

  crearDireccionServicios() {
    this.clients = this.servidor + this.generalPort+ this.apiUrlClients
  }

}