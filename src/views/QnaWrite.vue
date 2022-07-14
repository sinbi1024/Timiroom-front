<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {qnaData, userTypeInterface} from "../lib/types";
import common from "../lib/common";
import {ApiClient, ApiClientGet} from "../plugin/axios";

export default defineComponent({
  name: "qnaWrite",
  setup() {
    const userData = ref<userTypeInterface | null>(null);
    const inputData = ref<Object | null>({
      title: '',
      contents: '',
      email: '',
      date: new Date().toISOString().substring(0, 10),
    });

    const write = async () => {
      console.log(inputData.value);

      const result = await ApiClient('/User/Board/', inputData.value);

      if (result.message === "게시글 작성 완료") {
        alert("게시글을 작성하였습니다!");

        location.replace("/#/qna");
      }
    }

    onMounted(() => {
      userData.value = JSON.parse(common.getUserInfo('userInput'));
      console.log(userData.value);
      inputData.value.email = userData.value.userEmail as string;
    })

    return {
      inputData,
      write,
    }
  },

});
</script>

<template>
  <section class="qna-write">
    <div class="write-area">
      <input type="text" class="write-title" v-model="inputData.title" placeholder="제목">
      <input type="text" class="write-contents" v-model="inputData.contents" placeholder="내용">
      <input type="button" value="작성" class="write-btn" @click="write">
      <div>
        <p>답변 수신 이메일</p>
        <input type="text" class="write-user" :value="inputData.email" disabled="disabled">
      </div>
      <div>
        <p>작성일</p>
        <input type="text" class="write-date" :value="inputData.date" disabled="disabled">
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
