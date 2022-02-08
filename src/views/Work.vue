<template>
  <div class="work"> 
    <br>             
    <h3>Projects already done</h3>                
    <hr><br><br>
    <div class="row" style="margin:20px;">
            <Project
              v-for="project in projects"
              :key="project.title"
              :title="project.title"
              :description="project.description"
              :image="project.image"
            >
            </Project>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'

export default {
  name: 'Work',
  components: {
    Project
  },
  data(){
    return{
      projects:[
        {
          title:"SymCommerce",
          description:"Ecommerce Project built with Symfony PHP Framework.",
          image: require('@/assets/symfony-ecommerce.png')
        },
        {
          title:"EMarket",
          description:"MarketPlace Project built with Symfony PHP Framework.",
          image: require('@/assets/symfony-emarket.png')
        },
        {
          title:"Catalog",
          description:"Listing Project built with DevNet PHP Framework.",
          image: require('@/assets/devnet-catalog.png')
        },      
        {
          title:"Lara-vue Blog",
          description:"Blog System Project built with Laravel PHP and Vuejs Frameworks.",
          image: require('@/assets/symfony-ecommerce.png')
        },
      ]
    }
  }
}
</script>
<style scoped>
.work{
  margin:20px;
}
</style>