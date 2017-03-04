<template>
  <div id="hello body" class="center">
    <h1>Logo</h1>
    <input placeholder="Suche ..." type="search">
    <div class="chip" v-for="topic in trending">
      {{ topic }}
    </div>
  </div>
</template>

<script>
import { getTrendingTopics } from '../api/mock/trending.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      trending: []
    }
  },
  mounted: function () {
    this.test()
  },
  methods: {
    test: function () {
      getTrendingTopics().then((trending) => {
        this.trending = trending
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chip:hover {
    background-color: #26a69a;
    color: #fff;
  }
</style>
