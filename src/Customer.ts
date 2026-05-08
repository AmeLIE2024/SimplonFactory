
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
        return `\n Identifiant : ${this.customerId} ; \n Nom: ${this.name} ; \n Email: ${this.email} .`;
    }
}

