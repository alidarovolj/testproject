<template>
  <div class="container mx-auto">
    <div class="py-8 border-t border-b border-gray-400" v-for="movie of movies" :key="movie.id">
      <div class="flex items-start">
        <img class="mr-4" :src="movie.image" alt="" />
        <div class="info w-full">
          <p class="font-bold mb-3" @click="$router.push({ name: 'Movie', params: { id: movie.id } })">
            <span>{{ movie.id }}</span> {{ movie.name }}
          </p>
          <p class="mb-3" style="color: #999">{{ movie.date }}</p>
          <p class="w-full">{{ movie.desc }}</p>
        </div>
        <p class="mr-0 text-3xl font-bold px-1 py-3 bg-green-500 rounded-md">{{ movie.meta }}</p>
      </div>
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