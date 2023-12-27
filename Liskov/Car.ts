import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  getInteriorWidth(): number {
    return this.getCabinWidth();
  }

  getCabinWidth(): number {
    return 100;
  }
}
