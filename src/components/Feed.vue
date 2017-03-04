<template>
  <div id="feed">
    <nav>
    <div class="nav-wrapper center-align" style="background-color:#f5f5f5">
      <img class="left" src="../assets/logo.png" height="40px" style="margin-left:20px; margin-top: 10px">
      <input placeholder="SUCHE" v-model="query" type="search" style="margin-top:0px; width:350px; text-align: center; font-size: 25px; color:black; margin:auto">
    </div>
  </nav>
  <div class="col l12 center-align" style="margin-top:20px; margin-bottom:15px">
    <topic-chip v-for="topic in trendingTopics" :topic="topic" :key="topic.id"></topic-chip>
  </div>
    <div class="row">
      <feed-stream feedType="liberal" class="col s6 no-padding center-align"></feed-stream>
      <feed-stream feedType="conservative" class="col s6 no-padding center-align"></feed-stream>
    </div>
  </div>
</template>

<script>
import FeedStream from './FeedStream'
import {
  getTrendingTopics
} from '../api/mock/trending.js'
import TopicChip from './TopicChip'

export default {
  name: 'feed',
  components: {
    FeedStream,
    TopicChip
  },
  props: ['term'],
  data () {
    return {
      query: '',
      trendingTopics: []
    }
  },
  mounted: function () {
    this.setTrendingTopics()
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
    },
    setTrendingTopics: function () {
      this.trendingTopics = []
      getTrendingTopics().then((trendingTopics) => {
        this.trendingTopics = trendingTopics
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
