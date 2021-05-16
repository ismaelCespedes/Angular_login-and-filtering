import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import {AppRoutingModule} from "../app-routing.module";
import {AgGridModule} from "ag-grid-angular";
import {AgGridComponent} from "../ag-grid/ag-grid.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        AgGridModule.withComponents([]),
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AgGridComponent,
    ]
})
export class UsersModule { }
