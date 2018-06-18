<template>
  <div id="app">
    <div class="banner">
  </div>
  <div>
      <span v-if="error">Error fetching notes</span>
      <ul id="example-1">
        <li v-for="note in notes">
          INDEX {{ note.id }} - {{ note.title }} : {{ note.body }} 
        </li>
      </ul>
  </div>
    <input
      type="title"
      v-model="title"
      placeholder="title"
    />
    <input
      type="body"
      v-model="body"
      placeholder="body"
    />
  <button 
    @click="createNote">
    Add note
  </button>
  </div>
</template>

<script>
  import NotesService from '@/services/NotesService'
  export default {
    name: 'app',
    data () {
      return {
        title: '',
        body: '',
        error: '',
        notes: []
      }
    },
    methods: {
      async getNotes() {
        try {
          this.notes = (await NotesService.index()).data;
        } catch (error) {
          this.error = error.response.data.error;
        }
      },
      async createNote() {
        try {
          await NotesService.createNote({
            title: this.title,
            body: this.body
          });
          this.getNotes();
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    async mounted() {
      try {
        this.notes = (await NotesService.index()).data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<style scoped>
  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }
</style>
