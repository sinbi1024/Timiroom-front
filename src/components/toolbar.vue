<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {

    return {}
  },

});
</script>

<template>
  <section>
    <div class="tool">
      <span @click="this.$router.push('문의페이지')">문의하기</span>
    </div>
  </section>
</template>

<style scoped>
</style>