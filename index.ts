import { Customer } from './src/Customer'
import { ProductDerived } from './src/ProductDerived'
import {ClothingSize} from "./src/ClothingSize";


const customer = new Customer (1, "Alice", "alice@bar.com");
console.log(customer.displayInfo());

const product = new ProductDerived (1,"console",1,300);
console.log(product.displayDetails())

const size = ClothingSize.L;
console.log(size);