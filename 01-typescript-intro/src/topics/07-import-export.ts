import { Product, calculationIVA } from './06-funtions-destructuring';

const shoppingCart: Product [] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]

const [total, iva] = calculationIVA({
    IVA: 0.15,
    products:shoppingCart
    
});

console.log('Total', total);
console.log('IVA', iva);