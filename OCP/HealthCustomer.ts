import { Customer } from "./Customer";

export class HealthCustomer implements Customer{
    getCustomer(): string {
        return "Health Customer";
    }
}