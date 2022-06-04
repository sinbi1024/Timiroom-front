<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import boardViewer from '../components/boardViewer.vue';

export default defineComponent({
  name: "QnaViewer",
  components: {boardViewer},
  setup() {

    return {}
  },

});
</script>

<template>
  <section>
    <board-viewer></board-viewer>
  </section>
</template>

<style scoped>
</style>