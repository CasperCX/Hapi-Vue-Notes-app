import Api from '@/services/Api';

export default {
    index () {
        return Api().get('notes');
    },

    post (note) {
        return Api().post('notes', note)
    },

    patch (note) {
        return Api().patch(`notes/${note}`)
    },

    delete (note) {
        return Api().delete(`notes/${note}`)
    }
};

