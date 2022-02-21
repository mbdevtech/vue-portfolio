<template>
<div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <div class="container">
    <router-link to="/" class="navbar-brand" href="#">Vue-Porfolio</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">About</router-link>
        </li>
                <li class="nav-item">
          <router-link to="/skills" class="nav-link active" aria-current="page">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work" class="nav-link active" aria-current="page">Work</router-link>
        </li>
          <li class="nav-item">
          <router-link to="/contact" class="nav-link active" aria-current="page">Contact</router-link>
        </li>
      </ul>
    </div>
    </div>
</nav>
</div>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>