import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import * as CustomersActions from '../actions/customers.actions';
import { CustomersService } from "../../customers.service";
import { CustomerData } from "../../customers.model";

@Injectable()
export class customersEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.getCustomers),
      mergeMap(() => 
        this.customersService.getUsers().pipe(
          map((customers: CustomerData[]) => CustomersActions.getCustomersSuccess({ customers }))
        )
      ),
      catchError(error => of(CustomersActions.getCustomersFail({ error: error.message })))
    )
  )

  constructor(
    private actions$: Actions,
    private customersService: CustomersService,
  ){}
}