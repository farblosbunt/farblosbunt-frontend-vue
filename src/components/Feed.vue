<template>
  <div id="feed">
    <nav>
    <div class="nav-wrapper" style="background-color:#f5f5f5">
      <img src="../assets/logo.png" height="40px" style="margin-left:20px; margin-top: 10px">
      <input placeholder="SUCHE" v-model="query" type="search" style="width:350px; text-align: center; font-size: 25px">
    </div>
  </nav>
    <div class="row">
      <feed-stream feedType="liberal" class="col s6 no-padding"></feed-stream>
      <feed-stream feedType="conservative" class="col s6 no-padding"></feed-stream>
    </div>
  </div>
</template>

<script>
import FeedStream from './FeedStream'

export default {
  name: 'feed',
  components: {
    FeedStream
  },
  props: ['term'],
  data () {
    return {
      query: ''
    }
  },
  mounted: function () {
    this.onTermChanged()
  },
  watch: {
    'term': function () {
      this.onTermChanged()
    }
  },
  methods: {
    onTermChanged: function () {
      this.query = String(this.term).replace('-', ' ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col.no-padding {
  padding: 0 !important;
}
</style>
