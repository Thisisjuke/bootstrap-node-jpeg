const User = require('../../class/User');

const testUser = new User('Test');

test('User as name and uid by default', () => {
    expect(testUser.uid).toBeDefined();
    expect(testUser.name).toBeDefined();
});

test('User ID is an UUID', () => {
    const regex = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
    expect(testUser.uid).toMatch(regex);
});