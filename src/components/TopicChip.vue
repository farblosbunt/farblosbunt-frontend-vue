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
  .chip{
    border-radius: 0px;
    font-size: 18px;
    margin-left: 7px;
  }
  .chip:hover {
    background-color: #d32f2f;
    color: #fff;
  }
</style>
