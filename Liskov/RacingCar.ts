import { Vehicle } from "./Vehicle";

export class RacingCar extends Vehicle {
  getInteriorWidth(): number {
    return this.getCockpitWidth();
  }
  getCockpitWidth(): number {
    return 200;
  }
}
