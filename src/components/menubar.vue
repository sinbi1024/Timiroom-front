<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import router from "../router";

export default defineComponent({
  name: "PageInit",
  setup() {
    const moveTo = (path: string) => {
      router.push(path);
    }

    return {
      moveTo,
    }
  },
});
</script>

<template>
  <section>
    <div class="menu">
      <img class="logo" @click="moveTo('/main')" src="../../public/assets/image/logo.png">
      <div class="menu-text">
        <div @click="moveTo('/summ')">개요</div>
        <div @click="moveTo('/service')">서비스</div>
        <div @click="moveTo('/tech')">기술</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>