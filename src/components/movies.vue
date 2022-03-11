<template>
  <div>
    <div v-for="movie of movies" :key="movie.id">
        {{ movie.name }}
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
      urlMovie: "http://localhost:3001/movies",
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