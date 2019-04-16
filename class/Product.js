class Product {

    constructor(id, title, description, price, percentDiscount = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.percentDiscount = percentDiscount;
    }

    get id(){
        return this._id
    };
    set id(id){
        this._id = id;
    };
    get title(){
        return this._title
    };
    set title(title){
        this._title = title;
    };
    get description(){
        return this._description
    };
    set description(description){
        this._description = description;
    };
    get price(){
        return this._price
    };
    set price(price){
        this._price = price;
    };
    get percentDiscount(){
        return this._percentDiscount
    }
    set percentDiscount(percent) {
        this._percentDiscount = percent;
    };
}

module.exports = Product;