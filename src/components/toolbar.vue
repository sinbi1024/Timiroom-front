<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import common from "../lib/common";
import router from "../router";

export default defineComponent({
  name: "toolbar",
  setup() {
    let userMode = ref(false);

    onMounted(
        () => {
          changeMode();
        }
    )

    const changeMode = () => {
      const userInfo = common.getUserInfo('userInput');
      // console.log(userInfo);

      userMode.value = !!userInfo;
    }

    const goQna = () => {
      window.location.replace('/#/qna');
    }

    const logout = () => {
      common.removeUserInfo('userInput');
      router.push('/#/main');
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