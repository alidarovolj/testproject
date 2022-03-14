<template>
  <div>{{ movie.id }}</div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      movies: [],
      urlMovie: "http://localhost:3001/movies",
      movie: null,
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
  created() {
    const movie = this.movies.find(
      (movie) => movie.id == this.$route.params.id
    );
    if (movie) {
      this.movie = movie;
    }
  },
};
</script>