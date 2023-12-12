import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { GcommercialComponent } from './gcommercial/gcommercial.component';
import { GproductionComponent } from './gproduction/gproduction.component';
import { HomeComponent } from './home/home.component';
import { ManagmentComponent } from './managment/managment.component';
import { ParamComponent } from './param/param.component';
import { StockLogistiqueComponent } from './stock-logistique/stock-logistique.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' , redirectTo: ''},
  {path: 'stock_logistique', component: StockLogistiqueComponent},
  {path: 'gcommercial', component: GcommercialComponent},
  {path: 'gproduction', component: GproductionComponent},
  {path: 'managment', component: ManagmentComponent},
  {path: 'comptabilite', component: ComptabiliteComponent},
  {path: 'param', component: ParamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
