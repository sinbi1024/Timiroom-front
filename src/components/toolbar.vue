<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {
    let adminMode = ref(false);

    onMounted(
        () => {
          changeMode();
        }
    )

    const changeMode = () => {
      const userInfo = JSON.parse(localStorage.getItem('userInput'));
      if (userInfo) {
        if (userInfo.userType === "STU") {
          adminMode.value = true;
        }
      } else {
        adminMode.value = false;
      }
    }

    const logout = () => {
      localStorage.removeItem('userInput');
      changeMode();
    }

    return {
      changeMode,
      adminMode,
      logout,
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
        <div class="user-login" v-if="!adminMode" @click="this.$router.push('/login')">로그인</div>
        <div class="if-admin" v-if="adminMode">
          <div class="admin-page" @click="this.$router.push('/admin')">관리자 페이지</div>
          <div class="line">|</div>
          <div class="user-logout" @click="logout()">로그아웃</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>