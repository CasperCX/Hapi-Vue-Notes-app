const Knex = require("./db");

module.exports = {
     async getNotes (request, h) {
        const [...notes] = await Knex('note');
        return notes;
    },

    async getNoteById (request, h) {
        const id = request.params.id;
        const [note] = await Knex('note').where('id', id);
        return note;
    },

    async createNote (request, h) {
        const note_content = request.payload;
        try {
            const [noteId] = await Knex('note').returning('id').insert(note_content);
            return ({ message: "note created", createdNote: noteId });
        } catch (err) {
            return({ error: 'Note could not be created' })
        }
    },

    async updateNote (request, h) {
        const id = request.params.id;
        const note = {}
        note.title = request.payload.title;
        note.body = request.payload.body;
        const patched = await Knex('note').update(note).where('id', id)
        return ({ message: `note ${id} updated` });
    },

    async deleteNote (request, h) {
        const id = request.params.id;
        const deleted = await Knex('note').where('id', id).delete();
        return ({ message: `note ${id} deleted` });
    }
};