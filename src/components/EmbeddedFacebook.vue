<template>
  <div id="embedded-facebook">
  <div class="fb-post" :data-href="postUrl"></div>
  </div>
</template>

<script>
export default {
  name: 'embedded-facebook',
  props: ['postUrl']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
