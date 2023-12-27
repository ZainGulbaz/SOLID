import { IFax, IScan } from "./Interface";

export default class Cannon implements IScan,IFax{

    fax(): void {
        console.log("faxing....");
    }
    faxBulk(): void {
        console.log("faxing bulk...");
    }
    scan(): void {
        console.log("scanning...");
    }
    scanBulk(): void {
        console.log("scan bulk...");
    }

}