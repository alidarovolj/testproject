<template>
  <div class="carousel relative">
    <div class="container mx-auto">
      <div class="inner_content flex items-center">
        <div class="slide w-full h-full">
          <img class="w-full" src="../assets/1.jpg" alt="" />
        </div>
        <div class="slide w-full h-full">
          <img class="w-full" src="../assets/2.jpg" alt="" />
        </div>
        <div class="slide w-full h-full">
          <img class="w-full" src="../assets/3.jpg" alt="" />
        </div>
      </div>
      <p class="arrow_first">&lt;</p>
      <p class="arrow_second">&gt;</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
    
    mounted() {
        var a = 0;
        $('.arrow_second').on('click', function() {
            if (a === 0) {
                $('.inner_content').css({ transform: 'translateX(-33.3%)'});
                a = 1;
            } else if (a === 1) {
                $('.inner_content').css({ transform: 'translateX(-66.6%)'});
                a = 2;
            } else if (a === 2) {
                $('.inner_content').css({ transform: 'translateX(0)'});
                a = 0
            }
        })
    }
}
</script>