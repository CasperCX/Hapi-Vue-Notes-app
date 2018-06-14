module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return { message: 'Hello world' }
        }
    },
    {
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {
            return { message: "Hello " + encodeURIComponent(request.params.name) }
        }
    }
];
