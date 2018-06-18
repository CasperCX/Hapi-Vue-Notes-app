const Joi = require("joi");
const Knex = require("./db");
const Controller = require('./controllers');

module.exports = [
    {
        method: 'GET',
        path: '/notes',
        handler: Controller.getNotes
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: Controller.getNoteById
    },
    {
        method: 'POST',
        path: '/notes',
        options: {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    body: Joi.string().required()
                }
            }
        },
        handler: Controller.createNote
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
        handler: Controller.updateNote
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: Controller.deleteNote
    }
];
