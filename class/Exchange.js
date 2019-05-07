import { format, compareAsc } from 'date-fns';

class Exchange {

    constructor(receiver, product, dateBegin, dateEnd, EmailSender, DBconnection) {
        this.receiver = receiver;
        this.product = product;
        this.dateBegin = format(dateBegin, 'DD/MM/YYYY');
        this.dateEnd = format(dateEnd, 'DD/MM/YYYY');
        this.emailSender = new EmailSender();
        this.dbConnection = new DBconnection();
    }

    get receiver(){
        return this._receiver;
    };
    set receiver(receiver){
        this._receiver = receiver;
    };
    get product(){
        return this._product;
    };
    set product(product){
        this._product = product;
    };
    get dateBegin(){
        return this._dateBegin;
    };
    set dateBegin(dateBegin){
        this._dateBegin = dateBegin;
    };
    get emailSender(){
        return this._emailSender;
    };
    set emailSender(emailSender){
        this._emailSender = emailSender;
    };
    get dbConnection(){
        return this._dbConnection;
    };
    set dbConnection(dbConnection){
        this._dbConnection = dbConnection;
    };
    get dateEnd(){
        return this._dateEnd;
    };
    set dateEnd(dateBegin){
        this._dateEnd = dateBegin;
    };

    save(){
        const now = format(new Date(), 'DD/MM/YYYY');

        if(this.product.isValid && this.receiver.isValid && compareAsc(now, this.dateBegin) === -1 && compareAsc(now, this.dateEnd) === -1){
            if(this.product.owner.age < 18){
                this.emailSender.sendEmail(this.receiver, "<email content>");
                return {code : 202};
            }
            else{
                this.dbConnection.saveExchange(this.product);
                return {code : 201};
            }
        }
        else {
            return {code : 500};
        }
    };

}

module.exports = Exchange;