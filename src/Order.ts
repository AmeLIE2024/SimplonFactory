import {Customer} from "./Customer";
import {Product} from "./Product";

export class Order {

    orderId: number;
    customer: Customer;
    productList: Product[];
    orderDate: Date;

    constructor(orderId: number, customer: Customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.productList = [];
        this.orderDate = new Date();

    }



    //entrée liste et nouveau produit
    addProduct(product: Product)  {
        this.productList.push(product);
    }

    removeProduct(productId: number) {
        const index = this.productList.findIndex(product => product.productId === productId);
        this.productList.splice(index,1)
    }

    calculateWeight(){
        return this.productList.reduce((total, product)=> total + product.weight,0)
    }

     calculateTotal(){
       return this.productList.reduce((total, product) => total + product.price,0)
    }

    displayOrder(){

       const infos =  this.customer.displayInfo();
       const detailProduct = this.productList.map(product => product.displayDetails()).join("\n")
       const totalPrice = this.calculateTotal()
       return ("\n Client: " +infos + "\n Détail de la commande: "+ detailProduct + "\n Prix total: " + totalPrice) // les informations du client = displayInfo

    }
}