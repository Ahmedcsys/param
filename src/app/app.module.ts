import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ParamComponent } from './param/param.component';
import { GcommercialComponent } from './gcommercial/gcommercial.component';
import { GproductionComponent } from './gproduction/gproduction.component';
import { ManagmentComponent } from './managment/managment.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { BiReportingComponent } from './bi-reporting/bi-reporting.component';
import { StockLogistiqueComponent } from './stock-logistique/stock-logistique.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ParamComponent,
    GcommercialComponent,
    GproductionComponent,
    ManagmentComponent,
    ComptabiliteComponent,
    BiReportingComponent,
    StockLogistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
