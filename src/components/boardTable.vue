<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from "vue";
import {qnaData} from "../data/types";

export default defineComponent({
  name: "boardViewer",
  props: {
    boardList: {
      type: Array as PropType<Array<qnaData>>,
      required: false,
    }
  },
  setup() {
    const labels = {'keyNum': '번호', 'title': '제목', 'date': '작성일', 'user': '작성자'};

    const sorry = () => {
      alert('아직 게시글 페이지를 못 만들었습니다. 개발자가 죄송합니다.');
    }

    return {
      labels,
      sorry,
    }
  },

});
</script>

<template>
  <section>
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
        <tr v-for="item in boardList" @click="sorry">
          <td>{{ item.keyNum }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.user }}</td>
          <td>{{ item.date }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
</style>