import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { KebabCasePipe } from '../pipes/kebab-case.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { customersEffects } from '../customers/store/effects/customers.effects';
import * as effects from '../customers/store/effects/customers.effects';

import { customersReducer } from './store/reducers/customers.reducer';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersService } from './customers.service';
import { CustomersComponent } from './components/consumers/customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    KebabCasePipe,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature(effects.customersEffects),
  ],
  providers: [ 
    CustomersService,
    CurrencyPipe,
    DatePipe,
  ],

})
export class CustomersModule { }
