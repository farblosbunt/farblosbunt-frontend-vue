<template>
  <div id="embedded-facebook">
    <div class="fb-post" :data-href="embeddingUrl" v-if="elementType === 'link' || elementType === 'photo'" style="background-color: white;border-radius: 3px"></div>
    <div class="fb-video"
      :data-href="embeddingUrl"
      data-show-text="true"
      data-show-captions="true"
      v-else-if="elementType === 'video'"
      style="background-color: white; width:550px !important; border-radius: 3px"></div>
    <div v-else>Unbekannte Embedding Art 😔</div>
  </div>
</template>

<script>
export default {
  name: 'embedded-facebook',
  props: ['embeddingUrl', 'elementType']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
._2q1_{
  background-color: white !important;
}
</style>
