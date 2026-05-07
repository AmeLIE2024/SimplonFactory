import {Product} from "./Product";


export class ProductDerived extends Product{
    constructor(id: number, name: string, weight: number, price: number) {
        super(id, name, weight, price);
    }
}