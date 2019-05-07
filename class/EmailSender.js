class EmailSender {

    constructor() {}

    static sendEmail(emailReceiver, messageContent) {
        return new Error(`Impossible to send ${messageContent} to :${emailReceiver}`);
    }

}

module.exports = EmailSender;