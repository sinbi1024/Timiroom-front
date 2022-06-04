<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from "vue";
import {qnaData} from "../data/types";
import router from "../router";

export default defineComponent({
  name: "boardViewer",
  props: {
    boardList: {
      type: Array as PropType<Array<qnaData>>,
      required: false,
    }
  },
  setup() {
    const labels = {keyNum: '번호', title: '제목', date: '작성일', user: '작성자'};
    const view = ref<object>({});

    const viewState = ref<boolean>(false);

    const changeViewState = (v: qnaData) => {
      view.value = v;
      viewState.value = true;
    }

    return {
      labels,
      view,
      viewState,
      changeViewState,
    }
  },

});
</script>

<template>
  <section class="board-table">
    <div v-if="!viewState">
      <div class="qna-title">문의 목록</div>
      <div class="qna-table">
        <table>
          <thead class="qna-thead">
          <tr>
            <th>{{ labels.keyNum }}</th>
            <th>{{ labels.title }}</th>
            <th>{{ labels.date }}</th>
            <th>{{ labels.user }}</th>
          </tr>
          </thead>
          <tbody class="qna-tbody">
          <tr v-for="item in boardList" @click="changeViewState(item)">
            <td>{{ item.keyNum }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.user }}</td>
            <td>{{ item.date }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="viewState">
      <div>{{ view.title }}</div>
      <div>{{ view.contents }}</div>
      <div>{{ view.user }}</div>
      <input type="button" value="목록" @click="viewState = false">
    </div>
  </section>
</template>

<style scoped>
</style>