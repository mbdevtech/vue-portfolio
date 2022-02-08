<template>
  <div class="devskills">
    <br>
    <h3>Skills in depth</h3>               
    <hr><br><br>
  <div class="row">
    <div class="row">
      <div class="col-md-6">
            <Skill
              v-for="skill in Skills1"
              :key="skill.Title"
              :Pourcentage="skill.Pourcentage"
              :Title="skill.Title"
            ></Skill>
      </div>
      <div class="col-md-6">
            <Skill
              v-for="skill in Skills2"
              :key="skill.Title"
              :Pourcentage="skill.Pourcentage"
              :Title="skill.Title"
            ></Skill>
      </div>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Skill from '@/components/Skill.vue'
export default {
  name: 'DevSkills',
  components: {
    Skill
  }, 
  data(){
    return{
      Skills1:[
        {Title:'SQL', Pourcentage:90},
        {Title: 'PHP', Pourcentage: 80},
        {Title:'Symfony', Pourcentage:90},
        {Title: 'Laravel', Pourcentage: 60},
        {Title:'React', Pourcentage:70},
        {Title: 'Vuejs', Pourcentage: 60}
      ],
      Skills2:[
        {Title:'Windows', Pourcentage:90},
        {Title: 'Linux', Pourcentage: 80},
        {Title:'Wordpress', Pourcentage:80},
        {Title: 'Magento', Pourcentage: 70},
        {Title:'Git', Pourcentage:90},
        {Title: 'Docker', Pourcentage: 60}
      ],
    }
  }
}
</script>

<style scoped>
.devskills{
  margin: 20px;
}

</style>