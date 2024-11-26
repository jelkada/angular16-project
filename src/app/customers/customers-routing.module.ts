import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerResolver } from './customer.resolver';

import { CustomersComponent } from './components/consumers/customers.component';
import { CustomerInfoComponent } from './components/customer-info/consumer-info.component';

const routes: Routes = [
  { path: '',
    component: CustomersComponent,
    resolve: { customers: CustomerResolver }
  },
  { path: ':id',
    component: CustomerInfoComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
