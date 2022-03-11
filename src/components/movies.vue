<template>
  <div>
    <div v-for="movie of todos" :key="movie.id">
        {{ movie.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      errors: [],
      movies: [],
      urlMovie: "https://jsonplaceholder.cypress.io/photos?_limit=5",
    };
  },
  async mounted() {
    try {
      const takeData = await fetch(this.urlMovie);
      const result = await takeData.json();
      this.movies.push(...result);
      console.log(this.movies);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>