import { Calculate } from "./Calculate";
import { HealthCustomer } from "./HealthCustomer";

let healthCustomer= new HealthCustomer();

let cal= new Calculate();

console.log(cal.premiumInsurance(healthCustomer));
