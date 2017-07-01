<template>
  <div class="project-detail">
    <section class="hero-title">
      <div class="wrapper">
        <img class="coding"
             src="../assets/img/coding.svg"
             alt="">
        <h1> {{ detailItem[0].title }} </h1>
        <p>{{ detailItem[0].description }}</p>
        <a class="visit-website"
           v-if="detailItem[0].visit_website"
           :href="detailItem[0].visit_website_url"
           target="_blank">
          Visit Website</a>
      </div>
      <div class="wrapper">
        <img v-for="(image,index) in detailItem[0].full_images"
             :src="image"
             :key="index"
             alt=""
             class="work-image">
        <div class="links">
          <router-link class="visit-website prevButton"
                       :to="getPrevItemsUrl">Previos Project</router-link>
          <router-link class="visit-website"
                       :to="getNextItemsUrl">Next Project</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Works from './Works.vue'
import data from '@/assets/data/data.json'
export default {
  name: 'Project',
  data() {
    return {
      detailItem: data.works.filter((el, index) => {
        return el.url == this.$route.params.url
      })
    }
  },
  computed: {
    getNextItemsUrl() {
      return '/'
      // return data.works[parseInt(data.works.findIndex(el => el.url == this.$route.params.url) + 1)].url ? data.works[parseInt(data.works.findIndex(el => el.url == this.$route.params.url) + 1)].url : '/'
    },
    getPrevItemsUrl() {
      return '/'
      // return data.works[parseInt(data.works.findIndex(el => el.url == this.$route.params.url) - 1)].url ? data.works[parseInt(data.works.findIndex(el => el.url == this.$route.params.url) - 1)].url : '/'
    }
  }
}
</script>

<style scoped>
.links {
  display: flex;
  width: 100%;
  margin: 80px 0 -20px 0;
  justify-content: space-between
}

.links a {
  line-height: 20px
}

.hero-title h1 {
  margin: 15px 0
}

.work-image {
  margin-top: 30px;
  width: 100%!important;
}

.spacer {
  margin-top: 2em;
  display: block;
  width: 100%
}

.prevButton {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjQxNCAyOTQgMTAuNzMgNy4zOTQiPg0KICA8cGF0aCBpZD0iUGF0aF8xIiBkYXRhLW5hbWU9IlBhdGggMSIgZD0iTTMxLjU4LDk4NS42NzVsLTIuOTYtMy4xNDVhLjYzNi42MzYsMCwwLDAtLjgwOS0uMDQ2LjU3OC41NzgsMCwwLDAsLjAwNi44MDlMMjkuOSw5ODUuNUgyMS41NTVhLjU1NS41NTUsMCwxLDAsMCwxLjExSDI5LjlsLTIuMDgxLDIuMjA5YS42MTEuNjExLDAsMCwwLS4wMDYuODA5LjYyOC42MjgsMCwwLDAsLjgwOS0uMDQ2bDIuOTYtMy4xNDVhLjU2MS41NjEsMCwwLDAsMC0uNzYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQ1LjczIDEyODMuNzU0KSByb3RhdGUoLTE4MCkiLz4NCjwvc3ZnPg0K) left no-repeat;
  background-size: 15px;
  padding-right: 0;
  padding-left: 25px;
}
</style>
