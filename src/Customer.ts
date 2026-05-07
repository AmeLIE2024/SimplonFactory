
export class Customer {
    customerId: number;
    name: string;
    email: string;

    constructor(customerId: number, name: string, email: string) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
    }

    displayInfo(): string {
        return `Identifiant : ${this.customerId} ;  Nom: ${this.name} ; Email: ${this.email} .`;
    }
}

