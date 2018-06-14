const Hapi = require("hapi");
const routes = require("./routes");


const server = new Hapi.server(({
    host: 'localhost',
    port: 8080,
    routes: {cors: {
        origin: ['*']
    }
}
}));


server.route(routes);


const start = async () => {
    try {
        await server.start();
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
    console.log(`Server running at: ${server.info.uri}`);
}


start();


