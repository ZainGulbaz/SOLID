import { Product } from "./Product";

export class InHouseProduct extends Product{

    getDiscount(): number {
        return this.getExtraDiscount();
    }

    getExtraDiscount():number{
        return 0.75;
    }

}