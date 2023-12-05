export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Soni Erickson',
    price: 250.0,
}

const tablet: Product = {
    description: 'Samsung',
    price: 150.0,
}

interface IVAcalculationOptions{
    IVA: number;
    products: Product[];
}

//function calculationIVA(options:IVAcalculationOptions): number[] {
//function calculationIVA({IVA, products}:IVAcalculationOptions): number[] {
export function calculationIVA(options:IVAcalculationOptions): [number, number] {

    const {IVA, products} = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total*IVA];
}

const shoppingCart = [phone, tablet];
const IVA = 0.15;

//const result = calculationIVA({
    //products: shoppingCart,
    //IVA: IVA,
//});

const [result, TotalIVA] = calculationIVA({
    products: shoppingCart,
    IVA: IVA,
});

console.log('Total: ', result);
console.log('IVA: ', TotalIVA);


const {} = calculationIVA;

//export {};