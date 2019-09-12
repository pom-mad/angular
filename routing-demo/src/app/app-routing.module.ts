import { DepartementOverviewComponent } from './departement-overview/departement-overview.component';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementContactComponent } from './departement-contact/departement-contact.component';


const routes: Routes = [
  {path: '', redirectTo: '/departements', pathMatch: 'full'},
  {path: 'departements', component: DepartementListComponent},
  {
    path: 'departements/:id', 
    component: DepartementDetailComponent,
    children: [
       {path: 'overview', component: DepartementOverviewComponent},
       {path: 'contact', component: DepartementContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeListComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  DepartementListComponent,
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartementDetailComponent,
                                  DepartementOverviewComponent,
                                  DepartementContactComponent
                                  ]