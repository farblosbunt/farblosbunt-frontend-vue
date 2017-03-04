<template>
<div id="start" class="container center outer">
  <div class="middle">
    <div class="inner row">
      <div class="col l12">
        <img class="logo" alt="logo" src="../assets/logo.png">
      </div>
      <div class="col l12" style="padding: 20px">
        <input placeholder="SUCHE" type="search" style="width:350px; text-align: center; font-size: 25px">
      </div>
      <div class="col l12">
        <topic-chip v-for="topic in trendingTopics" :topic="topic" :key="topic.id"></topic-chip>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  getTrendingTopics
} from '../api/mock/trending.js'
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
<style scoped>
.logo {
  height: 150px
}

.container{
  max-width: 100%;
}

.outer {
  display: table;
  position: absolute;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  width: /*whatever width you want*/
  ;
}

.input-field input[type=text]:focus {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
</style>
