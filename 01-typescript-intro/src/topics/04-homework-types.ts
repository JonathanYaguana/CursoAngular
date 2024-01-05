/*
    ===== Código de TypeScript =====
*/
interface Address {
    streeth: string;
    country: any;
    city: string;
}

interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        streeth: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};