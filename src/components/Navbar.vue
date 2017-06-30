<template>
  <nav class="navbar">
    <div class="wrapper"><router-link to="/" class="brand">hamit<span>.work</span></router-link>
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style scoped>
.router-link-exact-active.router-link-active{opacity: 1!important;}
</style>