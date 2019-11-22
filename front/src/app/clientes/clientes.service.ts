import { Injectable } from '@angular/core';
import { Configuration } from 'src/endPoint/configuration';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { ClientModel } from 'src/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private configuration: Configuration) { }

  getClients(): Observable<HttpResponse<Array<ClientModel>>> {
    return this.http.get<Array<ClientModel>> (this.configuration.clients, {
     observe: 'response'});
  }

  postClient(client: ClientModel): Observable<HttpResponse<any>> {
    const httpHeaders = this.configuration.headers
    return this.http.post<any> (this.configuration.clients , client,{
      headers: httpHeaders,
      observe: 'response'});
  }

  getClientbyId(id:string):Observable<HttpResponse<ClientModel>>{

    return this.http.get<ClientModel> (this.configuration.clients+'/'+id, {
     observe: 'response'});
  }

  


}
