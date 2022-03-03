<template>
  <div class="home">
    <!--<test v-bind:transfer="transferData"/>-->
    <tictac />
  </div>
</template>

<script>
// import test from '@/components/test'
import tictac from '@/components/tictactoe'

export default {
  name: 'Home',
  components: {
    // filters,
    // todo,
    // calculator,
    // addBlock,
    // calendar,
    // test,
    tictac
  },
  data() {
    return {
      transferData: 'Переменная передана'
    }
  }
}
</script>
