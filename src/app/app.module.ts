import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesComponent } from './components/sales/sales.component';
import { DetailComponent } from './components/detail/detail.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TableComponent } from './components/sales/table/table.component';
import { ClockComponent } from './components/sales/clock/clock.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { QuantityComponent } from './components/sales/table/quantity/quantity.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrintComponent } from './components/sales/table/print/print.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    DetailComponent,
    TableComponent,
    ClockComponent,
    QuantityComponent,
    PrintComponent,
 
  ],
  entryComponents: [QuantityComponent,PrintComponent],      
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectAllModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    NumericTextBoxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDatepickerModule,
    NgMultiSelectDropDownModule.forRoot() 
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
