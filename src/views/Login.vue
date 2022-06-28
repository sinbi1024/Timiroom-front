<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {userInfo, joinInfo, userTypeInterface} from "../lib/types.ts";
import {ApiClient} from "../plugin/axios";
import common from "../lib/common";

export default defineComponent({
  name: "login",
  setup() {
    const userInput = ref<userInfo>({
      userEmail: '',
      userPasswd: '',
    });

    const joinInput = ref<joinInfo>({
      userName: '',
      userEmail: '',
      userPhone: '',
      userAddress: '',
      userPasswd: '',
      userType: '',
    });

    const joinMode = ref(false);

    const checkInput = (form: userInfo) => {
      const checkList = Object.keys(form);
      for (let i = 0; i < checkList.length; i++) {
        if (form[checkList[i]] !== '' && form[checkList[i]] !== 'undefined' && form[checkList[i]] !== null) {
        } else {
          window.alert('값을 입력해 주세요.');
          return false;
        }
      }
      return true;
    }

    const login = async (userInput: userInfo) => {
      if (!checkInput(userInput)) {
        return false;
      }

      const result = await ApiClient('/User/Login', userInput);

      if (result.message === '로그인 실패') {
        window.alert("로그인 실패!");
        await location.reload();
      } else {
        window.alert("로그인 성공!");
        common.setUserInfo(result as userTypeInterface);
        await location.replace("/main");
      }
    }

    const join = async () => {
      if (!checkInput(joinInput.value)) {
        return false;
      }

      const data = common.makeJson(joinInput.value);
      const result = await ApiClient('/User/Register', data);

      if (result.message === '회원가입 성공') {
        window.alert("회원가입 성공!");
        await location.replace("/login");
      } else {
        window.alert("회원가입 실패!");
        await location.reload();
      }
    }

    const changeJoinMode = () => {
      joinMode.value = !joinMode.value;
    }

    return {
      userInput,
      joinInput,
      login,
      join,
      checkInput,
      changeJoinMode,
      joinMode,
    }
  },

});
</script>

<template>
  <section>
    <div class="login" v-if="!joinMode">
      <div class="login-title">로그인</div>
      <input type="text" v-model="userInput.userEmail" class="input-email" placeholder="이메일"><br>
      <input type="password" v-model="userInput.userPasswd" class="input-password" placeholder="비밀번호"><br>
      <input type="submit" class="login-btn" @click="login(userInput)" value="로그인">
    </div>

    <div class="join" v-if="joinMode">
      <div class="join-title">회원가입</div>
      <input type="text" v-model="joinInput.userName" class="join-name" placeholder="이름"><br>
      <input type="text" v-model="joinInput.userEmail" class="join-email" placeholder="이메일"><br>
      <input type="text" v-model="joinInput.userPhone" class="join-phone" placeholder="전화번호"><br>
      <input type="password" v-model="joinInput.userPasswd" class="join-password" placeholder="비밀번호"><br>
      <input type="text" v-model="joinInput.userAddress" class="join-address" placeholder="주소"><br>
      <div class="user-type">
        <input type="radio" v-model="joinInput.userType" class="join-type" value="ADM"> 사업자<br>
        <input type="radio" v-model="joinInput.userType" class="join-type" value="USER"> 일반 사용자
      </div>
      <br>
      <input type="submit" class="join-btn" @click="join()" value="가입하기">
    </div>

    <div class="go-join" @click="changeJoinMode()" v-if="!joinMode">회원가입으로 이동</div>
    <div class="go-login" @click="changeJoinMode()" v-if="joinMode">로그인으로 이동</div>
  </section>
</template>

<style scoped>
</style>