<template>
  <div class="home">
    <movies />
    <!-- <space /> -->
  </div>
</template>

<script>
import movies from '@/components/movies'
// import space from '@/components/space'
export default {
  name: 'Home',
  components: {
    movies,
    // space
  }
}
</script>
