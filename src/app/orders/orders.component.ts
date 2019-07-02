import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  orderItem: IOrderItem[] = [];
  customer: ICustomer;
  total: number;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
      this.calculateSubTotal()
    });
  }

  calculateSubTotal() {
    this.orders.forEach((o: IOrder) => {
      o.orderItems.forEach((i: IOrderItem) => {
        this.total = i.itemCost * i.qty;
        i.subTotal = Math.floor(this.total)
      })
    })
  }

}