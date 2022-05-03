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
      <div @click="moveTo('/')">메인</div>
      <div @click="moveTo('/summ')">개요</div>
      <div @click="moveTo('/service')">서비스</div>
      <div @click="moveTo('/tech')">기술</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.menu {
  height: 70px;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  color: #7F8CAD;
  font-size: 28px;
  font-weight: bold;

  div {
    margin-right: 55px;
  }
}
</style>