import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes =  [
  {
      path: 'clientes',
      component: ClientesComponent
  },

  { path: '**', redirectTo: 'clientes' }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
