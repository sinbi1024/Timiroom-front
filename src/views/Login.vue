<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {userInfo, joinInfo} from "../data/types.ts";
import axios from "axios";
import router from "../router";

export default defineComponent({
  name: "login",
  setup() {
    const userInput = ref<userInfo>({
      userEmail: '',
      userPassword: '',
    });

    const joinInput = ref<joinInfo>({
      userName: '',
      userEmail: '',
      userType: '',
      userPhone: '',
      userPassword: '',
      userAddress: '',
    });

    let date = new Date();

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

    const login = (userInput: userInfo) => {
      if (!checkInput(userInput)) {
        return false;
      }

      const url = "http://localhost:4000/api/users/login";

      axios
          .post(url, userInput)
          .then((res) => {
            if (res.data.resultCode === 0) {
              window.alert("로그인 성공");
              setUserInfo(res.data.data);
              window.location.replace('/main');
            } else {
              console.log(res.data);
              window.alert("로그인 실패");
              return 1;
            }
          })
          .catch((e) => {
            console.error(e);
          })
    }

    const join = (joinInput: joinInfo) => {
      if (!checkInput(joinInput)) {
        return false;
      }

      const url = "http://localhost:4000/api/users/join";

      axios
          .post(url, joinInput)
          .then((res) => {
            if (res.data.resultCode === 0) {
              window.alert("회원가입 성공");
              joinMode.value = false;
            }
          })
          .catch((e) => {
            throw e;
          })
    }

    const setUserInfo = (userInput: userInfo) => {
      let inputInfo = JSON.stringify(userInput);
      localStorage.setItem('userInput', inputInfo);
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
      <input type="password" v-model="userInput.userPassword" class="input-password" placeholder="비밀번호"><br>
      <input type="submit" class="login-btn" @click="login(userInput)" value="로그인">
    </div>

    <div class="join" v-if="joinMode">
      <div class="join-title">회원가입</div>
      <input type="text" v-model="joinInput.userName" class="join-name" placeholder="이름"><br>
      <input type="text" v-model="joinInput.userEmail" class="join-email" placeholder="이메일"><br>
      <input type="text" v-model="joinInput.userPhone" class="join-phone" placeholder="전화번호"><br>
      <input type="password" v-model="joinInput.userPassword" class="join-password" placeholder="비밀번호"><br>
      <input type="text" v-model="joinInput.userAddress" class="join-address" placeholder="주소"><br>
      <div class="user-type">
        사업자 <input type="radio" v-model="joinInput.userType" class="join-type" value="ADM">
        일반 사용자 <input type="radio" v-model="joinInput.userType" class="join-type" value="USER">
      </div>
      <br>
      <input type="submit" class="join-btn" @click="join(joinInput)" value="가입하기">
    </div>

    <div class="go-join" @click="changeJoinMode()" v-if="!joinMode">회원가입으로 이동</div>
    <div class="go-login" @click="changeJoinMode()" v-if="joinMode">로그인으로 이동</div>
  </section>
</template>

<style scoped>
</style>