
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentNameComponent } from './component-name/component-name.component';
import { ClientesComponent } from './test/clientes/clientes.component';
import { ExamesComponent } from './test/exames/exames.component';
import { FarmacosComponent } from './test/farmacos/farmacos.component';



const routes: Routes = [
{ path : 'farmacos', component: FarmacosComponent},
{ path : 'exames', component: ExamesComponent},
{ path : 'clientes', component: ClientesComponent},
{ path : 'dash', component: ComponentNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
