import {Product} from "./Product";
import {ClothingSize} from "./ClothingSize";
import {ShoeSize} from "./ShoeSize";

export  class Clothing extends Product {

    size: ClothingSize;

    constructor(id: number, name: string, weight: number, price: number, size: ClothingSize){
        super(id, name, weight, price)
        this.size = size
    }

    displayDetails(size?: ClothingSize): string {
        if (size === undefined || size == null) {
            return super.displayDetails();
        }else {
            return super.displayDetails() + "Size:" + size;
        }

    }
}