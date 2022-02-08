<template>
  <div class="contact">
    <br>
    <h3>My Contacts</h3>
    <hr><br><br>
    <div class="container">
        <div class="row" style="margin:20px;">
        <div class="col-md-6">
            <img src="@/assets/contact.svg" class = "img" alt="">
        </div>
        <div class="col-md-6">
          <div class="info">
            <img src="@/assets/mail.png" alt="" class="thumb">
            <span><h5>mahfoud_bousba@yahoo.com</h5></span>
          </div>
          <div class="info">
           <img src="@/assets/phone.png" alt="" class="thumb">
           <span><h5>514 449 3670</h5></span>
          </div>
          <div class="links">
            <div class="info">
               <img src="@/assets/linkedin.png" alt="" class="thumb">
               <span>https://www.linkedin.com/in/mahfoud-bousba-30ba801b</span>
            </div>
            <div class="info">
               <img src="@/assets/github.png" alt="" class="thumb">
               <span>https://github.com/mbdevtech</span>
            </div>          
          </div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Contact',
  components: {
  }, 
}
</script>

<style scoped>
.contact{
  margin: 20px;
}
.img{
  width: 70%;
}
.thumb{
  width: 8%;
  margin-right: 10px;
}
.info{
  margin-top: 20px;
  display: flex;
}
</style>