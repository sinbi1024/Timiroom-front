<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {
    let userMode = ref(false);
    const changeUserMode = () => {
      userMode.value = !userMode.value;
    }
    return {
      changeUserMode,
      userMode,
    }
  },

});
</script>

<template>
  <section>
    <div class="user-wrap">
      <div class="tool">
        <div class="user-qna" @click="this.$router.push('/qna')">문의하기</div>
        <div class="line">|</div>
        <div class="user-login" v-if="!userMode" @click="this.$router.push('/login')">로그인</div>
        <div class="user-login" v-if="userMode" @click="this.$router.push('/admin')">마이페이지</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>