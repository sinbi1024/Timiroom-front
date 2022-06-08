<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData} from "../lib/types";
import boardTable from "../components/boardTable.vue";

export default defineComponent({
  name: "qna",
  components: {boardTable},
  setup() {
    const qnas = ref<Array<qnaData>>([]);

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