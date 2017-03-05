<template>
  <div id="feed">
    <!-- Nav -->
    <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper center-align" style="background-color:#f5f5f5">
        <router-link :to="{ name: 'Start' }">
          <img class="left" src="../assets/logo.png" height="40px" style="margin-left:20px; margin-top: 10px">
        </router-link>
        <input placeholder="SUCHE" v-model="query" v-on:keyup.enter="search" type="search" style="margin-top:0px; width:350px; text-align: center; font-size: 25px; color:black; margin:auto">
      </div>
    </nav>
    </div>
    <!-- ./Nav -->
    <!-- TrendingTopics -->
    <div class="col l12 center-align" style="margin-top:20px; margin-bottom:15px">
      <topic-chip v-for="topic in trendingTopics" :topic="topic" :key="topic.id"></topic-chip>
    </div>
    <!-- ./TrendingTopics -->
    <div class="row">
      <feed-stream politicalOrientation="left-oriented" :elements="leftOrientedElements" :spinner="loading" class="col s6 no-padding center-align"></feed-stream>
      <feed-stream politicalOrientation="right-oriented" :elements="rightOrientedElements" :spinner="loading" class="col s6 no-padding center-align"></feed-stream>
    </div>
    <div class="row center-align">
      <a class="waves-effect waves-light btn red darken-2" v-on:click="onInfinite"><i class="material-icons left"></i>Weitere Laden</a>
    </div>
  </div>
</template>

<script>
import FeedStream from './FeedStream'
import { getTrendingTopics } from '../api/mock/trending.js'
import { getFacebookPosts } from '../api/search'
import TopicChip from './TopicChip'

export default {
  name: 'feed',
  components: {
    TopicChip,
    FeedStream
  },
  props: ['term'],
  data () {
    return {
      query: '',
      trendingTopics: [],
      leftOrientedElements: [],
      rightOrientedElements: [],
      loading: false,
      offset: 0
    }
  },
  mounted: function () {
    // Set Trending Topics
    this.setTrendingTopics()
    // Set Query
    this.setQuery()
    // Load Initial Facebook Posts
    this.setFacebookPosts()
  },
  watch: {
    'term': function () {
      this.onTermChanged()
    }
  },
  methods: {
    onTermChanged: function () {
      // Term Changed, reset query
      this.setQuery()
      // Reset Facebook Posts and Offset
      this.leftOrientedElements = []
      this.rightOrientedElements = []
      this.offset = 0
      // Load first offset of new FacebookPosts
      this.setFacebookPosts()
    },
    setQuery: function () {
      this.query = String(this.term).replace('-', ' ')
    },
    search: function () {
      if (this.query !== '') {
        // Query is not empty
        this.query = String(this.query).replace(' ', '-')
        this.$router.push({ name: 'Feed', params: { term: this.query } })
      }
    },
    setTrendingTopics: function () {
      this.trendingTopics = []
      getTrendingTopics().then((trendingTopics) => {
        this.trendingTopics = trendingTopics
      })
    },
    onInfinite: function () {
      // Infinite Loading
      this.setFacebookPosts()
    },
    setFacebookPosts: function () {
      // Show a spinner
      this.loading = true
      // set Facebook Posts
      Promise.all([
        getFacebookPosts('left', this.query, this.offset),
        getFacebookPosts('right', this.query, this.offset)
      ]).then((responses) => {
        // Left oriented posts
        this.leftOrientedElements = this.leftOrientedElements.concat(responses[0].data.result)
        console.log(this.leftOrientedElements)
        return responses
      }).then((responses) => {
        // Right oriented posts
        this.rightOrientedElements = this.rightOrientedElements.concat(responses[1].data.result)
      }).then(() => {
        // Unshow Spinner
        this.loading = false
      }).then(() => {
        // Reload embedded Facebook Posts
        // Only on Reload etc. TODO!
        /* eslint-disable */
        FB.XFBML.parse();
        /* eslint-enable */
      }).then(() => {
        // Set offset
        this.offset++
      })
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
