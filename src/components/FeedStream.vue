<template>
  <div id="feed-stream">
    <div class="feed" :class="orientationClass">
      <embedded-facebook 
        :embeddingUrl="element.permalink_url"
        :elementType="element.type"
        v-for="element in elements"
        :key="element.id" 
        class="embedded facebook"
        v-if="spinner === false">
      </embedded-facebook>
      <div class="loader" v-if="spinner === true">Lade ...</div>
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
  props: ['politicalOrientation', 'elements', 'spinner'],
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

/**** Spinner *****/
/**** Source: https://projects.lukehaas.me/css-loaders/ ******/
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

</style>
