import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

import { CustomerData } from "../../customers.model";
import { CustomersState } from "../models/customer.model";
import * as CustomerActions from '../actions/customers.actions';

const EntityAdapter: EntityAdapter<CustomerData> = createEntityAdapter<CustomerData>();

export const initialState: CustomersState = {
  loading: false,
  customers: [],
  error: '',
}

export const customersReducer = createReducer(
  initialState,
  on(CustomerActions.getCustomers, (state) => ({ ...state, loading: true })),
  on(CustomerActions.getCustomersSuccess, (state, action) => ({
    ...state,
    customers: action.customers,
  })),
  on(CustomerActions.getCustomersFail, (state, action) => ({
    ...state, error: action.error, 
  }))
);



