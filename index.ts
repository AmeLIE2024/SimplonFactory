import {Customer} from './src/Customer'
import {ProductDerived} from './src/ProductDerived'
import {ClothingSize} from "./src/ClothingSize";
import {Order} from "./src/Order";
import {Shoes} from "./src/Shoes";
import {ShoeSize} from "./src/ShoeSize";
import {Clothing} from "./src/Clothing";


const client = new Customer (1, "Alice", "alice@bar.com");

const escarpin = new Shoes(21,"escarpin",20,80,ShoeSize.S36);
const robe = new Clothing(18,"Robe blanche", 100,30,ClothingSize.S);

const commande = new Order (1,client);
commande.addProduct(escarpin);
commande.addProduct(robe);

console.log(commande.displayOrder());