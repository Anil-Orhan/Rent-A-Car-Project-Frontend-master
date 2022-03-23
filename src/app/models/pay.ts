import { Customer } from './customer';

export interface Pay {
  totalAmount: number;
  customer: Customer;
}
