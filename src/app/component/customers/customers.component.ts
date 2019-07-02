import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/data.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
    title: string;
    people: any[];
    isVisible = true;

    // changeVisibility() {
    //     this.isVisible = !this.isVisible;
    // }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.title = 'Customer';
        this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => this.people = customers)
        // this.people = [
        //     {
        //         id: 1, name: 'lala lala', city: 'malang', orderTotal: 99, customerSince: randomDate(0, 23, 0, 23)
        //     },
        //     {
        //         id: 2, name: 'lili lili', city: 'malang coret', orderTotal: 29, customerSince: randomDate(0, 23, 0, 23)
        //     },
        //     {
        //         id: 3, name: 'lulu lulu', city: 'malang kabupaten', orderTotal: 92, customerSince: randomDate(0, 23, 0, 23)
        //     },
        // ]


    }
}