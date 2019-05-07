class Product {

    constructor(id, title, description, price, owner, percentDiscount = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.owner = owner;
        this.percentDiscount = percentDiscount;
    }

    get id(){
        return this._id;
    };
    set id(id){
        this._id = id;
    };
    get title(){
        return this._title;
    };
    set title(title){
        this._title = title;
    };
    get description(){
        return this._description;
    };
    set description(description){
        this._description = description;
    };
    get price(){
        return this._price;
    };
    set price(price){
        this._price = price;
    };
    get owner(){
        return this._owner;
    };
    set owner(owner){
        this._owner = owner;
    };
    get percentDiscount(){
        return this._percentDiscount;
    }
    set percentDiscount(percent) {
        this._percentDiscount = percent;
    };

    isValid(){
        return this.owner.isValid() && this.title;
    }
}

module.exports = Product;