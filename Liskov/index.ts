import { Car } from "./Car";
import { RacingCar } from "./RacingCar";
import { Vehicle } from "./Vehicle";

let cars:Vehicle[] = [];

let mehran= new Car();
let cultus= new Car();
let buggati= new RacingCar();

cars=[mehran,cultus,buggati];

for(let i=0; i<cars.length; i++){
    
    console.log(cars[i].getInteriorWidth());
}