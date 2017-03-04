<template>
  <div id="feed-stream">
    <div class="feed" :class="feedTypeClass">
      <embedded-facebook :postUrl="post.permalink_url" :postType="post.type" v-for="post in posts" :key="post.id" class="embedded facebook"></embedded-facebook>
    </div>
  </div>
</template>

<script>
import { getFacebookPosts } from '../api/search'
import EmbeddedFacebook from './EmbeddedFacebook'

export default {
  name: 'feed-stream',
  components: {
    EmbeddedFacebook
  },
  props: ['feedType', 'query'],
  data () {
    return {
      posts: []
    }
  },
  mounted: function () {
    this.performQuery()
  },
  watch: {
    'query': function () {
      this.performQuery()
    }
  },
  methods: {
    performQuery: function () {
      if (this.query !== '') {
        if (this.feedType === 'liberal') {
          this.setFacebookPosts('left', this.query)
        } else {
          this.setFacebookPosts('right', this.query)
        }
      }
    },
    setFacebookPosts: function (feedType, query) {
      getFacebookPosts(feedType, query).then((posts) => {
        this.posts = posts.data.result
      })
      .then(() => {
        /* eslint-disable */
        if (FB !== undefined) {
          FB.XFBML.parse();
        }
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
  background-color: #d32f2f;
  height: 100%;
}

.feed.conservative {
  background-color: #424242;
  height: 100%;
}

.embedded {
  margin-bottom: 10px;
}
</style>
