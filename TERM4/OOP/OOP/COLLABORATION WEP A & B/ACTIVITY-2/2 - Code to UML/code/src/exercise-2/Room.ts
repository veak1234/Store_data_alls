import { Customer } from "./Customer";

export class Room {
  rommId: string;

  customers: Customer[]; // the customers sleeping in this room

  constructor(rommId: string) {
    this.rommId = rommId;
    this.customers = []; // no customer y default
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}
