const Product = require('../../class/Product');

const testProduct = new Product('1', "Bouteille d'eau", "Boit de l'eau.", 1);

console.log(testProduct.percentDiscount);

test('User as a default discount at 0%', () => {
    expect(testProduct.percentDiscount).toBeDefined();
    expect(testProduct.percentDiscount).toBe(0);
});
