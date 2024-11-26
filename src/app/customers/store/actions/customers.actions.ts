import { createAction, props } from "@ngrx/store";
import { CustomerData } from "../../customers.model";

export const getCustomers = createAction('[Customers] Get Customers');

export const getCustomersSuccess = createAction(
  '[Customers] Get Customers Success',
  props<{ customers: CustomerData[] }>(),
);

export const getCustomersFail = createAction(
  '[Customers] Get Customers Fail',
  props<{ error: string }>(),
);
