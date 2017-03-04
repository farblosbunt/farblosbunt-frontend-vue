<template>
  <div id="start" class="container center">
    <h1>Logo</h1>
    <input placeholder="Suche ..." type="search">
    <topic-chip v-for="topic in trendingTopics" :topic="topic" :key="topic.id"></topic-chip>
  </div>
</template>

<script>
import { getTrendingTopics } from '../api/mock/trending.js'
import TopicChip from './TopicChip'

export default {
  name: 'start',
  components: {
    TopicChip
  },
  data () {
    return {
      trendingTopics: []
    }
  },
  mounted: function () {
    this.setTrendingTopics()
  },
  methods: {
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
<style scoped></style>
