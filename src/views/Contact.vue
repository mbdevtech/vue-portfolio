<template>
  <div class="container">
    <div id="contact" class="my-4">
      <h3>My Contacts</h3>
      <hr />
    </div>
    <div class="row">
      <div class="col-md-6">
        <img src="@/assets/contact.svg" class="img-fluid" alt="" />
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-row mt-2">
          <i class="bi bi-telephone fs-2 me-2"></i>
          <div class="fs-5 pt-2">514 449 3670</div>
        </div>
        <div class="d-flex flex-row mt-2">
          <i class="bi bi-envelope fs-2 me-2"></i>
          <span class="fs-5 pt-2">mahfoud_bousba@yahoo.com</span>
        </div>
        <div class="d-flex flex-row mt-2">
          <i class="bi bi-github fs-2 me-2"></i>
          <span class="fs-5 pt-2">
            <a
              class="text-dark text-decoration-none"
              href="https://github.com/mbdevtech"
              >https://github.com/mbdevtech</a
            >
          </span>
        </div>
        <div class="d-flex flex-row mt-2">
          <i class="bi bi-linkedin fs-2 me-2"></i>
          <span class="fs-5 pt-2">
            <a
              class="text-dark text-decoration-none"
              href="https://linkedin.com/in/mahfoud-bousba-30ba801b"
              >linkedin.com/in/mahfoud-bousba-30ba801b</a
            >
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Contact",
  components: {},
};
</script>
