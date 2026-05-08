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
                 return super.displayDetails() + "\n Size:" + this.size;
    }
}