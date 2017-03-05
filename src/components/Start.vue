<template>
<div id="start" class="container center outer">
  <div class="middle">
    <div class="row valign-wrapper">
    <div class="col l6">
      <div class="inner row">
        <div class="col l12">
          <img class="logo" alt="logo" src="../assets/logo.png">
        </div>
        <div class="col l12" style="padding: 20px">
          <input placeholder="SUCHE" type="search" class="search" v-model="query" v-on:keyup.enter="search">
        </div>
        <div class="col l12">
          <topic-chip v-for="topic in trendingTopics" :topic="topic" :key="topic.id"></topic-chip>
        </div>
      </div>
    </div>
    <div class="col l6 valign-wrapper" style="height:100vh; margin-bottom:-20px;background-color:#f5f5f5">
      <div class="container">
        <h1>FARBLOS<span class="h1color" style="color:#d32f2f">BUNT.</span></h1>
        <h5>WAS</h5>
        <p>Ein Tool zur besseren Meinungsbildung. Wir stellen Postings von Facebook und somit Meinungen von „linken“ und „rechten“ Medien gegenüber. Und Du brichst dadurch aus deiner (Meinungs-)Filterbubble aus.
        </p>
        <h5>WARUM</h5>
        <p>
          Wir alle bewegen uns in sogenannten Filterbubbles. Egal ob gewollt oder nicht, egal ob bewusst oder nicht. Aber genau diese Eingrenzungen sind gefährlich. Sie verleiten uns dazu, nur Medien zu konsumieren, die unsere eigene Meinung bestärken. Das wollen wir mit diesem Tool aufbrechen.
        </p>
        <h5>WIE</h5>
        <p>
          Insgesamt durchsuchen wir die Posts auf Facebook von ca. 40 deutschen Meinungsmachern, quer durch die politsche Landschaft. Dabei werden diese in extrem links, links, neutral, rechts und extrem rechts eingeteilt. <br><a href="http://www.polisphere.eu/wp-content/uploads/2017/02/medienlandschaftskarte_v2.pdf" style="color:#d32f2f" target="_blank">Zur Auflistung</a>
        </p>
      </div>
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
      trendingTopics: [],
      query: ''
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
    },
    search: function () {
      if (this.query !== '') {
        // Query is not empty
        this.query = String(this.query).replace(' ', '-')
        this.$router.push({ name: 'Feed', params: { term: this.query } })
      }
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

.search {
  width:350px;
  text-align: center;
  font-size: 25px;
}

.input-field input[type=text]:focus {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }

.h1color h1{
  color:#d32f2f;
}
</style>
