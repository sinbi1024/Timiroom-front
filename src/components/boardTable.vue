<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from "vue";
import {qnaData} from "../lib/types";
import {ApiClient} from "../plugin/axios";

export default defineComponent({
  name: "boardViewer",
  props: {
    boardList: {
      type: Array as PropType<Array<qnaData>>,
      required: false,
    }
  },
  setup(props) {
    const userMode = ref<boolean>(false);
    const labels = {keyNum: '번호', title: '제목', date: '작성일', user: '작성자'};
    const view = ref<object>({});

    const viewState = ref<boolean>(false);

    const changeViewState = async (v: qnaData) => {
      viewState.value = true;

      const data = {title: v.title};
      console.log(data);
      view.value = await ApiClient('/User/Board/Detail/', data) as object;
    }

    onMounted(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInput'));
      console.log(userInfo);

      if (userInfo) {
        userMode.value = true;
      } else {
        userMode.value = false;
      }

      console.log(props.boardList.length);
    })

    return {
      labels,
      view,
      viewState,
      changeViewState,
      userMode,
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
            <th>{{ labels.user }}</th>
            <th>{{ labels.date }}</th>
          </tr>
          </thead>
          <tbody class="qna-tbody">
          <tr v-for="item in boardList" @click="changeViewState(item)">
            <td>{{ item.keyNum }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.date }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <input type="button" class="write-btn" value="작성" v-if="userMode" @click="$router.push('/qnawrite')">
    </div>

    <div class="board-viewer" v-if="viewState">
      <div class="qna-title">문의 조회</div>
      <div class="viewer-section">
        <div class="viewer-title-section">
          <div class="viewer-title">
            {{ view.title }}
          </div>
          <div class="viewer-date">
            {{ view.date }}
          </div>
        </div>
        <div class="viewer-contents">
          {{ view.contents }}
        </div>
        <div class="viewer-user">
          <div class="viewer-user-user">답변 받을 이메일</div>
          {{ view.email }}
        </div>
      </div>
      <div class="btn-section">
        <input type="button" class="back-btn" value="목록" @click="viewState = false">
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
