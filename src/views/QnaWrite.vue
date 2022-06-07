<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData, userTypeInterface} from "../data/types";

export default defineComponent({
  name: "qnaWrite",
  setup() {
    const userData = ref<userTypeInterface | null>(null);
    const inputData = ref<Object | null>({
      title: '',
      contents: '',
      user: '',
      date: new Date().toLocaleString(),
    });

    const getUserInfo = () => {
      userData.value = JSON.parse(
          localStorage.getItem("userInput")
      ) as userTypeInterface;
    };

    const click = () => {
      console.log(inputData);
    }

    onMounted(() => {
      getUserInfo();
      inputData.value.user = userData.value.userName as string;
    })

    return {
      inputData,
      click,
    }
  },

});
</script>

<template>
  <section class="qna-write">
    <div class="write-area">
      <input type="text" class="write-title" v-model="inputData.title" placeholder="제목">
      <input type="text" class="write-contents" v-model="inputData.contents" placeholder="내용">
      <input type="button" value="작성" class="write-btn" @click="click">
      <div>
        작성자 <input type="text" class="write-user" :value="inputData.user" disabled="disabled"><br>
      </div>
      <div>
        작성일 <input type="text" class="write-date" :value="inputData.date.substring(0, 10)" disabled="disabled">
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>