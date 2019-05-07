const { validProduct } = require('../__mocks__/products.mocks.js');

describe("Discount tests", () => {
    it('User as a default discount at 0%', () => {
        expect(validProduct.owner).toBeDefined();
        expect(validProduct.title).toBeDefined();
    });
});

describe("Product testing", () => {
    it('User as a default discount at 0%', () => {
        expect(validProduct.percentDiscount).toBeDefined();
        expect(validProduct.percentDiscount).toBe(0);
    });
});
