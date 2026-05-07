import {Product} from "./Product";
import {ShoeSize} from "./ShoeSize";


export class Shoes extends Product {

    size: ShoeSize;

    constructor(id: number, name: string, weight: number, price: number, size: ShoeSize){
        super(id, name, weight, price)
        this.size = size
    }

    displayDetails(size?: ShoeSize): string {
        if(size === undefined || size == null){
            return super.displayDetails();
        }else {
            return super.displayDetails() + "Size: " + size;
        }

    }
}
