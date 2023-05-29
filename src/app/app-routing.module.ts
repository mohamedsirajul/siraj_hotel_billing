import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { DetailComponent } from './components/detail/detail.component';
import { TableComponent } from './components/sales/table/table.component';



const routes: Routes = [
  {path:'', redirectTo:'sales', pathMatch:'full'},
  {path:'sales', component: SalesComponent },
  {path:'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ SalesComponent, DetailComponent ]

