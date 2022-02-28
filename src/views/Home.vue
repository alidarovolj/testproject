<template>
  <div class="home">
    <test v-bind:transfer="transferData"/>
  </div>
</template>

<script>
import test from '@/components/test'

export default {
  name: 'Home',
  components: {
    // filters, 
    // todo,
    // calculator,
    // addBlock,
    // calendar
    test
  },
  data() {
    return {
      transferData: 'Переменная передана'
    }
  }
}
</script>
