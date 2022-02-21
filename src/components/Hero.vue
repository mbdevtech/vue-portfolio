<template>
<div class="container">
<div class="row">
<div class="col-md-6">
  <h1>Hi, i am Mahfoud</h1>
  <h3>Full Stack Web Developer</h3>
  <div class="fs-5 pt-2">
I have a Bachelor degree in Computer Science, polished with a long experience in the field.
I trained and supported a variety kind of users, i was a player in companies IT planning.
 Beside this, i developed  many apps including the database design as well. 
 During last years, i was focusing on web development using the latest technologies and frameworks like symfony,
  Laravel, Vuejs and Reactjs.
  <span><router-link to="/skills" style="text-decoration:none;">View more</router-link></span></div>
  </div>
<div class="col-md-6"> 
  <img class="img-fluid" src="@/assets/programming-svg.svg" alt="">
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile{
  width: 95%;
}
</style>
