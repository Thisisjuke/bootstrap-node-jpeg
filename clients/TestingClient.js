const User = require('../class/User');
const Product = require('../class/Product');
const Cart = require('../class/Cart');

const testFile = () => {

    const Fabrice = new User('Fabrice', 'Dab', 28, 'f.dab@gmail.com');

    const AquaBottle = new Product('1', "Bouteille d'eau", "Boit de l'eau.", 1);
    const FortniteBook = new Product('2', "Livre Fortnite", "Faire des TOP1 les kheys.", 12, 10);
    const AirPods = new Product('3', "Apple AirPods", "Un fdp, mais un fdp riche", 180);

    const Cart1 = new Cart(Fabrice);
    Cart1.addProduct(AquaBottle);
    Cart1.addProduct(FortniteBook);

    AirPods.percentDiscount = 3;
    FortniteBook.percentDiscount = 0;
    Cart1.removeProduct(2);
    Cart1.addProduct(FortniteBook);

    return {
        Fabrice,
        AquaBottle,
        FortniteBook,
        AirPods,
        Cart1
    };
};

module.exports = {
    testFile
};