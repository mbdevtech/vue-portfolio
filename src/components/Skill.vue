<template>
<div class="container">
    <div>
        <h4>{{Title}}</h4>
        <div class="progress skill">
            <div class="progress-bar"  :style="{width: Pourcentage +'%',}" role="progressbar" aria-valuenow="50" 
            aria-valuemin="0" aria-valuemax="100">{{Pourcentage}}%</div>
        </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['Title','Pourcentage'],
  name: 'Skill',
  data(){
    return{
      progress: 70,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile{
  width: 95%;
}
.thumb{
  width: 8%;
  border-radius: 50%;
  margin-right: 10px;
}
h1{
 font-family: Arial, Helvetica, sans-serif;
 font-size: 4rem;
 font-style: italic;
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
.skill{
  margin:15px 0;
  height: 30px;
  font-size: 18px;
}


</style>
