const Joi = require("joi");
const Knex = require("./db");


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
        path: '/notes',
        handler: async (request, h) => {
            const noteId = 2
            const [...notes] = await Knex('note');
            return notes;
        }
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: async (request, h) => {
            const id = request.params.id;
            const [note] = await Knex('note').where('id', id);
            return note;
        }
    },
    {
        method: 'POST',
        path: '/note',
        options: {
            validate: {
                payload: {
                    title: Joi.string().required()
                }
            }
        },
        handler: async (request, h) => {
            const note = request.payload;
            const [ noteid ] = await Knex('note').returning('id').insert(note);
            return ({message: "note created", note_id: noteid });
        }
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        options: {
            validate: {
                payload: {
                    title: Joi.string().required()
                }
            }
        },
        handler: (request, h) => {
            const id = request.params.id -1;
            return ({message: `note ${id} updated`});
    }
}
];
