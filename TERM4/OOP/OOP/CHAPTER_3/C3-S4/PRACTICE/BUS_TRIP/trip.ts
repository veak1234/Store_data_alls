import { Address } from "./address";
import { Customer } from "./customer";
import { Date } from "./date";

export class Trip{
    busName:string;
    customer:Customer[];
    depatureAddress:Address;
    arrivalAddress:Address;
    dapatureDateTime:Date;
    arrivalDateTime:Date;

    constructor(busName:string, customer:Customer[], departureAddress:Address, arrivalAddress:Address, dapatureDateTime:Date,arrivalDateTime:Date) {
        this.busName = busName;
        this.customer = customer;
        this.depatureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
        this.dapatureDateTime=dapatureDateTime;
        this.arrivalDateTime=arrivalDateTime;
    }
}