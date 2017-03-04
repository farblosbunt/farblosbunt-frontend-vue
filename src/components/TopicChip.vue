<template>
  <router-link :to="{ name: 'Feed', params: { term: topic.term }}">
    <div class="chip" :id="'topic-' + topic.term">
      {{ topic.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'topic-chip',
  props: ['topic']
}
</script>

<style scoped>
  .chip:hover {
    background-color: #26a69a;
    color: #fff;
  }
</style>
