<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData} from "../lib/types";
import boardTable from "../components/boardTable.vue";
import {ApiClientGet} from "../plugin/axios";

export default defineComponent({
  name: "qna",
  components: {boardTable},
  setup() {
    const qnas = ref<Array<qnaData>>([]);

    const getBoardList = async () => {
      const result: object = await ApiClientGet('/User/Board/List', {});

      for (let i = 0; i < result.length; i++) {
        qnas.value.push(result[i]);
        qnas.value[i].keyNum = i + 1;
      }
    }

    onMounted(() => {
      getBoardList();
    })

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
