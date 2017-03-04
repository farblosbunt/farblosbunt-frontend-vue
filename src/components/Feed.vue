<template>
  <div id="feed">
    <div class="container center">Suche etc.</div>
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
  props: ['topic'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
