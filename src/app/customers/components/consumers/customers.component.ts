import { Component, OnInit, Input, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CustomerData } from '../../customers.model';
import { CustomersService } from '../../customers.service';
import * as CustomersActions from '../../store/actions/customers.actions';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { customersSelector } from '../../store/selectors/customers.selectors';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {

  // customers must be defined in the route's resolve
  @Input() customers?: CustomerData[];

  private customersService = inject(CustomersService);
  private store = inject(Store)

  price = '123.55';
  name = 'name string';

  ngOnInit(): void {
    console.log('\n\n >> this.customers: ', this.customers);

    registerLocaleData(localeFr, 'fr');

    this.store.dispatch(CustomersActions.getCustomers());
    
    this.store
      .pipe(select(customersSelector))
      .subscribe(data => console.log('>>> customer data ', data));

    // this.customersService.getUsers()
    //   .pipe(
    //     map((res: any) => res.data)
    //   )
    //   .subscribe((data: any) =>
    //     console.log(data)
    //   )
  }
}
