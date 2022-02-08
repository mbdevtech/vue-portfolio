<template>
  <div class="home">
    <br>
    <h3>About</h3>
    <hr>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
<style scoped>
.home{
  margin: 20px;
}
</style>
