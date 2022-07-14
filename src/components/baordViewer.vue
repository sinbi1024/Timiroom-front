<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from "vue";
import {qnaData} from "../lib/types";
import {ApiClientGet} from "../plugin/axios";

export default defineComponent({
  name: "boardViewer",
  props: {
    viewTitle: {
      type: String as PropType<string>,
    }
  }
  setup() {
    const view = ref<object>({});

    const changeViewState = async (v: qnaData) => {
      const data = {title: v.title};
      const result = await ApiClientGet('/User/Board/Detail/', data);

      console.log(result);
    }

    return {}
  },

});
</script>

<template>
  <section class="board-viewer">
      <div class="viewer-section">
        <div class="viewer-title">{{ view.title }}</div>
        <div class="viewer-contents">{{ view.contents }}</div>
        <div class="viewer-user">{{ view.email }}</div>
      </div>
      <div class="btn-section">
        <input type="button" class="back-btn" value="목록" @click="viewState = false">
      </div>
  </section>
</template>

<style scoped>
</style>
