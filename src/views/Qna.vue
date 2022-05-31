<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData} from "../data/types";

export default defineComponent({
  name: "PageInit",
  setup() {
    const qnas = ref<Array<qnaData>>([
      {
        keyNum: 1,
        title: '문의1',
        date: new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDate().toString()
      },
      {
        keyNum: 2,
        title: '문의2',
        date: new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDate().toString()
      },
      {
        keyNum: 3,
        title: '문의3',
        date: new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDate().toString()
      }
    ]);

    const sorry = () => {
      alert('아직 게시글 페이지를 못 만들었습니다. 개발자가 죄송합니다.');
    }

    return {
      qnas,
      sorry,
    }
  },

});
</script>

<template>
  <section>
    <hr>
    <div class="qna-title">문의 목록</div>
    <div class="qna-table">
      <table>
        <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in qnas" @click="sorry">
          <td>{{ item.keyNum }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>