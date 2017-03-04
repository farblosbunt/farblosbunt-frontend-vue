<template>
  <div id="feed-stream">
    <div class="feed" :class="feedTypeClass">1</div>
  </div>
</template>

<script>
export default {
  name: 'feed-stream',
  props: ['feedType'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    feedTypeClass: function () {
      if (this.feedType === 'liberal') {
        return 'liberal'
      } else {
        return 'conservative'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feed {
  height: 500px;
  padding: 25px;
}

.feed.liberal {
  background-color: #c62828; 
}

.feed.conservative {
  background-color: #616161; 
}
</style>
