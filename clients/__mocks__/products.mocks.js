import Product from '../../class/Product';

const { validUser, invalidUser, invalidAgeUser } = require('../__mocks__/users.mocks.js');

const validProduct = new Product(1, "Veste taille S", "Je ne l'utilise plus.", 10, validUser);

const invalidProduct = new Product(1, "Veste taille S", "Je ne l'utilise plus.", 10, invalidUser);

const validProductWithUnderAgeOwner = new Product(1, "Veste taille S", "Je ne l'utilise plus.", 10, invalidAgeUser);

module.exports = {
    validProduct,
    invalidProduct,
    validProductWithUnderAgeOwner
};