import { IPrint } from "./Interface";

export default class Printer implements IPrint{

    print(): void {
        console.log("Printing...");
    }
    printBulk(): void {
        console.log("Printing in bulk...");
    }
}