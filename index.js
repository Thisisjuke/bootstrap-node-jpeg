const Hapi = require('hapi');
const RouterPlugin = require('hapi-router');

(async () => {
    const server = new Hapi.Server({
        port: 8001
    });

    await server.register({
        plugin: RouterPlugin,
        options: {
            routes: 'routes/**/!(_)*.js'
        }
    });

    await server.start();
})();