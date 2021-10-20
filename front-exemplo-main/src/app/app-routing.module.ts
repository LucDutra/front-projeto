import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { AdicionarComponent } from './Pessoa/adicionar/adicionar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'editar', component: EditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
