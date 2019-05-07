// Import all our fake data ready to be tested.
const { validProduct, invalidProduct, validProductWithUnderAgeOwner } = require('../__mocks__/products.mocks.js');
const { validUser, invalidMailUser } = require('../__mocks__/users.mocks.js');

// Import both classes that we need to mock.
const EmailSender = require('../../class/EmailSender');
const DBconnection = require('../../class/DBconnection');

// Mock them with jest.
jest.mock('../../class/EmailSender');
jest.mock('../../class/DBconnection');

const Exchange = require('../../class/Exchange');

// Test block for the exchange.
describe("Test if exchange is valid", () => {

    // On the mocked Class, we can mock only the functions we need and choose the return state.
    beforeAll(() => {
        EmailSender.mockImplementation(() => {
            return {
                // SendEmail always TRUE
                sendEmail: (a, b) => true,
            };
        });
        DBconnection.mockImplementation(() => {
            return {
                // Saves methods always TRUE
                saveExchange: () => true,
                saveProduct: () => true,
                saveUser: () => true,
            };
        });
    });

    // Test for each case we can test.

    it('With all valid data, should return {code: 201}', () => {
        const dateBegin = new Date(2020, 1, 11);
        const dateEnd = new Date(2021, 1, 11);

        const validExchange = new Exchange(validUser, validProduct, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchange.save()).toStrictEqual({code: 201})
    });

    it('With underage receiver, should return {code: 202}', () => {
        const dateBegin = new Date(2020, 1, 11);
        const dateEnd = new Date(2021, 1, 11);

        const validExchangeWithMail = new Exchange(validUser, validProductWithUnderAgeOwner, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchangeWithMail.save()).toStrictEqual({code: 202})
    });

    it('With dates in the past, should return {code: 500}', () => {
        const dateBegin = new Date(2001, 1, 11);
        const dateEnd = new Date(2004, 1, 11);

        const validExchangeWithMail = new Exchange(validUser, validProduct, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchangeWithMail.save()).toStrictEqual({code: 500})
    });

    it('With invalid product, should return {code: 500}', () => {
        const dateBegin = new Date(2001, 1, 11);
        const dateEnd = new Date(2004, 1, 11);

        const validExchangeWithMail = new Exchange(validUser, invalidProduct, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchangeWithMail.save()).toStrictEqual({code: 500})
    });

    it('With invalid owner, should return {code: 500}', () => {
        const dateBegin = new Date(2001, 1, 11);
        const dateEnd = new Date(2004, 1, 11);

        const validExchangeWithMail = new Exchange(invalidMailUser, validProduct, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchangeWithMail.save()).toStrictEqual({code: 500})
    });

    it('With dates in the past, should return {code: 500}', () => {
        const dateBegin = new Date(2001, 1, 11);
        const dateEnd = new Date(2004, 1, 11);

        const validExchangeWithMail = new Exchange(validUser, validProduct, dateBegin, dateEnd, EmailSender, DBconnection);

        expect(validExchangeWithMail.save()).toStrictEqual({code: 500})
    });
});