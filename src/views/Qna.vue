<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData} from "../data/types";
import boardTable from "../components/boardTable.vue";

export default defineComponent({
  name: "PageInit",
  components: {boardTable},
  setup() {
    const qnas = ref<Array<qnaData>>([
      {
        keyNum: 1,
        title: '문의1',
        date: '2022. 6. 3. 오후 5:25:34',
        user: 'snb@jmail.ac.kr'
      },
      {
        keyNum: 2,
        title: '문의2',
        date: '2022. 6. 3. 오후 5:25:34',
        user: 'ub@jmail.ac.kr'
      },
      {
        keyNum: 3,
        title: '문의3',
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