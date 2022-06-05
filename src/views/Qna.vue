<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData} from "../data/types";
import boardTable from "../components/boardTable.vue";

export default defineComponent({
  name: "qna",
  components: {boardTable},
  setup() {
    const qnas = ref<Array<qnaData>>([
      {
        keyNum: 1,
        title: '문의1',
        contents: '문의합니다. 관리자 시스템이란 무엇인가요?',
        date: '2022. 6. 3. 오후 5:25:34',
        user: 'snb@jmail.ac.kr'
      },
      {
        keyNum: 2,
        title: '문의2',
        contents: '문의합니다. 공정별로 수집할 수 있는 데이터는 무엇인가요.',
        date: '2022. 6. 3. 오후 5:25:34',
        user: 'ub@jmail.ac.kr'
      },
      {
        keyNum: 3,
        title: '문의3',
        contents: '문의합니다.',
        date: '2022. 6. 3. 오후 5:25:34',
        user: 'cl0ud@jmail.ac.kr'
      }
    ]);

    return {
      qnas,
    }
  },

});
</script>

<template>
  <section>
    <board-table
        :board-list="qnas"
    ></board-table>
  </section>
</template>