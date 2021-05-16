import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { environment } from '@environments/environment';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    referenceEmail = 'contacto@tuten.cl';
    ColumnDefs;
    RowData: any;
    AgLoad: boolean;

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.GetAgColumns();
        this.loadElements();
    }

    GetAgColumns() {
        this.ColumnDefs = [
            { headerName: 'BookingId', field: 'bookingId', sortable: false, filter: true, width: 80 },
            { headerName: 'Cliente', field: 'tutenUserClient', sortable: false, filter: false , width: 100
                ,valueGetter: params => params.data.tutenUserClient.firstName + ' ' + params.data.tutenUserClient.lastName,
            },
            { headerName: 'Fecha de Creación', field: 'bookingTime', sortable: false, filter: false, width: 120},
            { headerName: 'Dirección', field: 'tutenUserProfessional.streetAddress', sortable: false, filter: false ,resizable: true, width: 300},
            { headerName: 'Precio', field: 'bookingPrice', sortable: false, width: 90 , type: 'numericColumn', filter: 'agNumberColumnFilter'}
        ];
    }

    loadElements() {
        this.accountService.getBookingUser(this.referenceEmail, true, environment.defaultApp)
            .pipe(first())
            .subscribe(bookingUserList =>{
                this.RowData = bookingUserList
                this.AgLoad = true;
            });
    }
}
