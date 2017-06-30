<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footer-item></footer-item>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import FooterItem from './components/FooterItem.vue'

export default {
  name: 'app',
  components: {
    Navbar,Home,FooterItem
  }
}
</script>

