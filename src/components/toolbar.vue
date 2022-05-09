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
    <div class="user-wrap">
      <div class="tool">
        <div class="user-qna" @click="this.$router.push('/qna')">문의하기</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>