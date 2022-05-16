<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {
    let adminMode = ref(false);
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
        if (userInfo.userType === "ADM") {
          userMode.value = false;
          adminMode.value = true;
        } else if (userInfo.userType === "USER") {
          userMode.value = true;
          adminMode.value = false;
        }
      } else {
        userMode.value = false;
        adminMode.value = false;
      }
    }

    const goQna = () => {
      const userInfo = JSON.parse(localStorage.getItem('userInput'));

      if (userInfo === null) {
        window.alert("로그인 후 이용해 주세요.");
        return false;
      }

      window.location.replace('/#/qna');
    }

    const logout = () => {
      localStorage.removeItem('userInput');
      window.location.replace('/#/main');
      changeMode();
    }

    return {
      changeMode,
      adminMode,
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
        <div class="user-login" v-if="!adminMode && !userMode" @click="this.$router.push('/login')">로그인</div>
        <div class="if-admin" v-if="adminMode">
          <div class="admin-page" @click="this.$router.push('/admin')">관리자 페이지</div>
          <div class="line">|</div>
        </div>
        <div class="if-user" v-if="userMode">
          <div class="my-page" @click="this.$router.push('/my')">마이페이지</div>
          <div class="line">|</div>
        </div>
        <div class="user-logout" v-if="adminMode || userMode" @click="logout()">로그아웃</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>