<template>
<div class="container-fluid hero">
<div class="row">
<div class="col-md-6">
  <h1>Hi, i am Mahfoud</h1>
  <h3>Full Stack Web Developer</h3>
  <div class="aboutme">
I am a Bachelor in Computer Science, IT guru, i have a long experience in the field.
I trained and supported a variety kind of users, i was a player in companies IT planning.
 Beside this, i developed  many apps including the database design as well. 
 During last years, i was focusing on web development using the latest technologies and frameworks like symfony,
  Laravel, Vuejs and Reactjs.
  <span><router-link to="/about" style="text-decoration:none;">View more</router-link></span></div>

</div>
<div class="col-md-6">
  
  <img class="profile" src="@/assets/programming-svg.svg" alt="">
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
.hero{
  text-align: left;
  padding: 5%;
  border-radius: 1%;
  height: 100vh;
}
.aboutme{
  text-align: left;
  padding: 5% 0;
  font-size: 18px;
  justify-content: start;
}
</style>
