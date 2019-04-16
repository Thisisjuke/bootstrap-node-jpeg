const TestingHandler = require('../../handler/TestingHandler.js');

module.exports = [
    {
        method: 'GET',
        path: '/test',
        handler: TestingHandler.getMyTests,
    }
];
