<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {
    let userMode = ref(false);

    onMounted(
        () => {
          changeMode();
        }
    )

    const changeMode = () => {
      const userInfo = JSON.parse(localStorage.getItem('userInput'));
      console.log(userInfo);

      if (userInfo) {
        userMode.value = true;
      } else {
        userMode.value = false;
      }
    }

    const goQna = () => {
      window.location.replace('/#/qna');
    }

    const logout = () => {
      localStorage.removeItem('userInput');
      window.location.replace('/#/main');
      changeMode();
    }

    return {
      changeMode,
      userMode,
      goQna,
      logout,
    }
  },
});

</script>
<template>
  <section>
    <div>
      <div class="tool">
        <div class="user-qna" @click="goQna">문의하기</div>
        <div class="line">|</div>
        <div class="user-login" v-if="!userMode" @click="this.$router.push('/login')">로그인</div>
        <div class="if-user" v-if="userMode">
          <div class="my-page" @click="this.$router.push('/my')">마이페이지</div>
          <div class="line">|</div>
          <div class="user-logout" @click="logout">로그아웃</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>