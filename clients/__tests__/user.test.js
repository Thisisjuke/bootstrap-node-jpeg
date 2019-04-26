const { validUser, invalidAgeUser, invalidMailUser, invalidUidUser } = require('../__mocks__/users.mocks.js');

describe("Tests about User", () => {
    test('User as firstName, lastName, age, email and uid by default', () => {
        expect(validUser.uid).toBeDefined();
        expect(validUser.firstName).toBeDefined();
        expect(validUser.lastName).toBeDefined();
        expect(validUser.age).toBeDefined();
        expect(validUser.email).toBeDefined();
    });
});

describe("UID's User check", () => {
    it('User ID is an UUID', () => {
        const regex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
        expect(validUser.uid).toMatch(regex);
    });

    it('User ID is an invalid UUID', () => {
        const regex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
        expect(invalidUidUser.uid).not.toMatch(regex);
    });
});

describe("User Email Check", () => {
    it('User has a valid email', () => {
        const regex = /\S+@\S+\.\S+/;
        expect(validUser.email).toMatch(regex);
    });

    it('Email not matches regex', () => {
        const regex = /\S+@\S+\.\S+/;
        expect(invalidMailUser.email).not.toMatch(regex);
    });
});

describe("User Email Check", () => {
    it("User's age is more than 13", () => {
        expect(validUser.age).toBeGreaterThanOrEqual(13);
    });

    it("Underage User", () => {
        expect(invalidAgeUser.age).not.toBeGreaterThanOrEqual(13);
    });
});