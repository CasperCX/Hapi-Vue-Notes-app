<template>
  <div id="app">
    <div class="banner">
  </div>
  <div>
      <ul id="example-1">
        <li v-for="note in notes">
          {{ note.id }} - {{ note.title }} : {{ note.body }} 
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
  import NotesService from '@/services/NotesService'
  export default {
    name: 'app',
    data () {
      return {
        error: '',
        notes: []
      }
    },
    async mounted () {
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
