<template>
  <div class="container">
    <div id="about" class="my-4">
      <h3>About</h3>
      <hr />
    </div>
    <Hero/>
    <!-- begin -->
    <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
    <p class="mb-0 text-muted text-center">© 2022 Devhostclub, Inc</p>

  </footer>
    <!-- end footer -->
    
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
