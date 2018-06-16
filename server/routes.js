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
                    title: Joi.string().required(),
                    body: Joi.string().required()
                }
            }
        },
        handler: async (request, h) => {
            const note_content = request.payload;
            const [noteId] = await Knex('note').returning('id').insert(note_content);
            return ({ message: "note created", createdNote: noteId });
        }
    },
    {
        method: 'PATCH',
        path: '/notes/{id}',
        options: {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    body: Joi.string().required()
                }
            }
        },
        handler: async (request, h) => {
            const id = request.params.id;
            const note = {}
            note.title = request.payload.title;
            note.body = request.payload.body;
            const patched = await Knex('note').update(note).where('id', id)
            return ({ message: `note ${id} updated` });
    }
},
{
    method: 'DELETE',
    path: '/notes/{id}',
    handler: async (request, h) => {
        const id = request.params.id;
        const deleted = await Knex('note').where('id', id).delete();
        return ({ message: `note ${id} deleted` });
    }
}
];
