<template>
  <div id="feed-stream">
    <div class="feed" :class="orientationClass">
      <embedded-facebook 
        :embeddingUrl="element.permalink_url"
        :elementType="element.type"
        v-for="element in elements"
        :key="element.id" 
        class="embedded facebook">
      </embedded-facebook>
    </div>
  </div>
</template>

<script>
import EmbeddedFacebook from './EmbeddedFacebook'

export default {
  name: 'feed-stream',
  components: {
    EmbeddedFacebook
  },
  props: ['politicalOrientation', 'elements'],
  data () {
    return {
      posts: []
    }
  },
  computed: {
    orientationClass: function () {
      if (this.politicalOrientation === 'left-oriented') {
        return 'left-oriented'
      } else {
        return 'right-oriented'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feed {
  min-height: 1000px;
  padding: 25px;
}

.feed.left-oriented {
  background-color: #d32f2f;
  height: 100%;
}

.feed.right-oriented {
  background-color: #424242;
  height: 100%;
}

.embedded {
  margin-bottom: 10px;
}
</style>
