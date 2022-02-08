<template>
  <div class="project">
    <a class="link" href="">
      <div class="card" style="width:60%; left:20%;">
           <div class="card-body">         
              <h4 class="card-title">{{title}}</h4>
              <hr>
              <img :src="image" class= "image" alt="">
              <hr>
              <p class="card-text">{{description}}.</p>
            </div>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: String,
    image: String,
    description: Text
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
  box-sizing:border-box;
  width: 100%;
  margin:20px 0;
}
.project{
   margin:20px 0;
}
.link{
 text-decoration: none;
 color:black;
}
</style>