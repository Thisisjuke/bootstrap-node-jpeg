module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: ( request, reply ) => {
            return 'Hello World!';
        }
    }
];
