const noteslist = [
    {
        title: "something",
    },
    {
        title: "else",
    }
];


module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return { message: 'Hello world' }
        }
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: (request, h) => {
            const id = request.params.id -1;
            if (noteslist[id]) return (noteslist[id]);
            return ({message: `Note with number ${id} not found`});
        }
    },
    {
        method: 'POST',
        path: '/notes',
        handler: (request, h) => {
            const note = request.payload;
            noteslist.push(note);
            return ({message: "note created"});
        }
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: (request, h) => {
            const id = request.params.id -1;
            noteslist[id] = request.payload;
            return ({message: `note ${id} updated`});
    }
}
];
