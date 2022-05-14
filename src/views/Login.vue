<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {userInfo, joinInfo} from "../data/types.ts";
import axios from "axios";
import router from "../router";

export default defineComponent({
  name: "PageInit",
  setup() {
    const userInput = ref<userInfo>({
      userEmail: '',
      userPassword: '',
      userType: 'STU',
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
          window.alert('값을 입력해 주세묘.');
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
            if (res.data.resultCode == 0) {
              window.alert("로그인 성공");
              setUserInfo(res.data.data[0]);
              window.location.replace('/main');
            } else {
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
            if (res.data.resultCode == 0) {
              window.alert("회원가입 성공");
              window.location.replace('/#/login');
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
      <div class="loginTitle">로그인</div>
      <input type="text" v-model="userInput.userEmail" class="inputEmail" placeholder="이메일"><br>
      <input type="password" v-model="userInput.userPassword" class="inputPassword" placeholder="비밀번호"><br>
      <input type="submit" class="loginBtn" @click="login(userInput)" value="로그인">
    </div>

    <div class="join" v-if="joinMode">
      <div class="joinTitle">회원가입</div>
      <input type="text" v-model="joinInput.userName" class="joinName" placeholder="이름"><br>
      <input type="text" v-model="joinInput.userEmail" class="joinEmail" placeholder="이메일"><br>
      <input type="text" v-model="joinInput.userPhone" class="joinPhone" placeholder="전화번호"><br>
      <input type="password" v-model="joinInput.userPassword" class="joinPassword" placeholder="비밀번호"><br>
      <input type="text" v-model="joinInput.userAddress" class="joinAddress" placeholder="주소"><br>
      <div class="userType">
        관리자 <input type="radio" v-model="joinInput.userType" class="joinType" value="STU">
        일반 사용자 <input type="radio" v-model="joinInput.userType" class="joinType" value="USER">
      </div>
      <br>
      <input type="submit" class="joinBtn" @click="join(joinInput)" value="가입하기">
    </div>

    <div class="goJoin" @click="changeJoinMode()" v-if="!joinMode">회원가입으로 이동</div>
    <div class="goLogin" @click="changeJoinMode()" v-if="joinMode">로그인으로 이동</div>
  </section>
</template>

<style scoped>
</style>