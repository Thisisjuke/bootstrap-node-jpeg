const User = require('../class/User');
const Product = require('../class/Product');
const Cart = require('../class/Cart');

const testFile = () => {

    const Fabrice = new User('Fabrice', 'Dab', 28, 'f.dab@gmail.com');

    const Jacket = new Product('1', "Veste taille S", "Je l'utilise plus.", 10, Fabrice);
    const FortniteBook = new Product('2', "Livre Fortnite", "Faire des TOP1 les kheys.", 12, Fabrice, 10);
    const AirPods = new Product('3', "Apple AirPods", "Un fdp, mais un fdp riche", 180, Fabrice);

    const Cart1 = new Cart(Fabrice);
    Cart1.addProduct(Jacket);
    Cart1.addProduct(FortniteBook);

    AirPods.percentDiscount = 3;
    FortniteBook.percentDiscount = 0;
    Cart1.removeProduct(2);
    Cart1.addProduct(FortniteBook);

    return {
        Fabrice,
        Jacket,
        FortniteBook,
        AirPods,
        Cart1
    };
};

module.exports = {
    testFile
};