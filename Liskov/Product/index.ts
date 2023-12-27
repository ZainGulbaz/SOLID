import { InHouseProduct } from "./InHouseProduct";
import { Product } from "./Product";


let product1= new Product();
let product2= new Product();
let product3= new InHouseProduct();

const products=[product1, product2, product3];

for(const product of products){
    console.log(product.getDiscount());
}