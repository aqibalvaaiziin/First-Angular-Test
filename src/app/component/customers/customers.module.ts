import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
    exports: [CustomersComponent]
})

export class CustomersModule { }