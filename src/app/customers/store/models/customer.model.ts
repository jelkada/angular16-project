import { CustomerData } from "../../customers.model";

export interface CustomersState {
  customers: CustomerData[];
  loading: boolean;
  error: string;
}