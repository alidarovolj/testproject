<template>
  <div class="home">
    <!--<test v-bind:transfer="transferData"/>-->
    <!-- <tictac /> -->
    <!-- <space /> -->
    <fetchAPI />
  </div>
</template>

<script>
// import test from '@/components/test'
// import tictac from '@/components/tictactoe'
// import space from '@/components/space'
import fetchAPI from '@/components/fetchAPI'

export default {
  name: 'Home',
  components: {
    // filters,
    // todo,
    // calculator,
    // addBlock,
    // calendar,
    // test,
    // tictac,
    // space,
    fetchAPI
  },
  data() {
    return {
      transferData: 'Переменная передана'
    }
  }
}
</script>
