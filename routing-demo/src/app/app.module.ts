import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';
import { DepartementOverviewComponent } from './departement-overview/departement-overview.component';
import { DepartementContactComponent } from './departement-contact/departement-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartementDetailComponent,
    DepartementOverviewComponent,
    DepartementContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
