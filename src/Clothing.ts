import {Product} from "./Product";
import {ClothingSize} from "./ClothingSize";


export  class Clothing extends Product {

    size: ClothingSize;

    constructor(id: number, name: string, weight: number, price: number, size: ClothingSize){
        super(id, name, weight, price)
        this.size = size
    }

    displayDetails(): string {
                 return super.displayDetails() + "\n Size:" + this.size;
    }
}