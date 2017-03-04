<template>
  <div id="feed-stream">
    <button v-on:click="setFacebookPosts()">Neu laden ...</button>
    <div class="feed" :class="feedTypeClass">
      <embedded-facebook :postUrl="post.permalink" v-for="post in posts" :key="post.id" class="embedded facebook"></embedded-facebook>
    </div>
  </div>
</template>

<script>
import { getFacebookPosts } from '../api/mock/facebookPosts'
import EmbeddedFacebook from './EmbeddedFacebook'

export default {
  name: 'feed-stream',
  components: {
    EmbeddedFacebook
  },
  props: ['feedType'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: []
    }
  },
  mounted: function () {
    this.setFacebookPosts()
  },
  methods: {
    setFacebookPosts: function () {
      this.posts = []
      getFacebookPosts().then((posts) => {
        this.posts = posts
        console.log(posts)
      }).then(() => {
        /* eslint-disable */
        FB.XFBML.parse();
        /* eslint-enable */
      })
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

.embedded {
  margin-bottom: 10px;
}
</style>
