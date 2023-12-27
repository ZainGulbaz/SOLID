import { Customer } from "./Customer";

export class FinanceCustomer implements Customer{
    getCustomer(): string {
        return "Finance Customer";
    }
}