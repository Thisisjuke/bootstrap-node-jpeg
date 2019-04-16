class Cart {

    constructor(user) {
        this.userId = user._uid;
        this.products = [];
    }

    get userId(){
        return this.userId
    };
    set userId(uid){
        this._uid = uid;
    };

    addProduct(product){
        this.products.push(product);
    }

    removeProduct(productId){
        this.products.splice(this.products.findIndex(function(i){
            return i.id === productId;
        }), 1);
    }

}

module.exports = Cart;