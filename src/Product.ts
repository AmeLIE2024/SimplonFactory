 export abstract class Product {
    productId: number;
    name: string;
    weight: number;
    price: number;

    constructor(productId: number, name: string, weight: number, price: number) {
        this.productId = productId;
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    displayDetails(): string{
        return `\n Product ID: ${this.productId},\n Name: ${this.name},\n Weight: ${this.weight},\n Price: ${this.price} €`;
    }

}