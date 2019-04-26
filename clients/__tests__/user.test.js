const User = require('../../class/User');

const testUser = new User('Jean', 'Michel', 28, 'dab.dab@dab.dab');

test('User as firstName, lastName, age, email and uid by default', () => {
    expect(testUser.uid).toBeDefined();
    expect(testUser.firstName).toBeDefined();
    expect(testUser.lastName).toBeDefined();
    expect(testUser.age).toBeDefined();
    expect(testUser.email).toBeDefined();
});

test('User ID is an UUID', () => {
    const regex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
    expect(testUser.uid).toMatch(regex);
});

test('User has a valid email', () => {
    const regex = /\S+@\S+\.\S+/;
    expect(testUser.email).toMatch(regex);
});

test("User's age is more than 13", () => {
    expect(testUser.age).toBeGreaterThanOrEqual(13);
});