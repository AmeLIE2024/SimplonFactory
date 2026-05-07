import {Customer} from "./Customer";
import {Product} from "./Product";

class Order {

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

    addProduct(product: Product) {
        //todo : ajoute un produit à la commande
    }

    removeProduct(productId: number) {
        //todo : retire un produit de la commande
    }

    calculateWeight(){
        //todo : calcule le poids total de la commande
    }

    calculateTotal(){
        //todo : calcule le prix total de la commande
    }

    displayOrder(){
        //todo: Affiche les détails de la commande:
        // les informations du client
        // les informations de chaque produit
        // le total de la commande
    }
}