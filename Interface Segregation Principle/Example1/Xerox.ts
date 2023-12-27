import { IFax, IPrint, IScan } from "./Interface";

export default class implements IScan,IPrint,IFax{
    fax(): void {
        console.log("Faxing...");
    }
    faxBulk(): void {
        console.log("Faxing in bulk...");
    }
    print(): void {
        console.log("Printing...");
    }
    printBulk(): void {
        console.log("Printing bulk...");
    }
    scan(): void {
        console.log("Scanning...");
    }
    scanBulk(): void {
        console.log("Scanning bulk...");
    }

}