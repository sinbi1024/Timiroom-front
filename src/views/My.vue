<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from "vue";
import {userInfo, userTypeInterface} from "../lib/types";
import common from "../lib/common";

export default defineComponent({
  name: "My",
  setup() {
    const profileImgPath = ref<string>('/assets/image/cat.png');
    const filePreview = ref<Blob | null>(null);
    const userData = ref<userTypeInterface | null>(null);
    const editMode = ref<boolean>(false);

    const changeProfile = (e: Event) => {
      const v = e.target as HTMLInputElement;
      // console.log(v.files[0]);
      filePreview.value = URL.createObjectURL(v.files[0]) as Blob;
      profileImgPath.value = filePreview.value as string;
    };

    const changeEditMode = () => {
      editMode.value = !editMode.value;
      console.log(editMode.value);
    }

    const doSave = () => {
      let data = document.getElementById('form');
      // let mail = document.getElementsByName('userEmail');
      // let addr = document.getElementsByName('userAddress');
      // console.log("mail: ", mail.entries().next().value[1].value);
      // userData.value.userEmail = mail.entries().next().value[1].value;
      // userData.value.userAddress = addr.entries().next().value[1].value;
      let formData = new FormData(data as HTMLFormElement);
      for (let i of formData.entries()) {
        if (i[0] === 'userEmail') {
          userData.value.userEmail = i[1] as string;
        } else if (i[0] === 'userAddress') {
          userData.value.userAddress = i[1] as string;
        }
      }

      common.setUserInfo(userData.value);
      editMode.value = !editMode.value;

      console.log('do Save');
    }

    // const playSvg = () => {
    //   const vivus = new Vivus('test2', {duration: 200, file: '/assets/image/svg/test2_animated.svg'}, (v) => {
    //     v.play(v.getStatus() === 'end' ? -1 : 1);
    //   });
    // }

    onMounted(() => {
      console.log(common.getUserInfo('userInput'));
      userData.value = JSON.parse(common.getUserInfo('userInput'));
      // playSvg();
      //
      // nextTick(() => {
      //   ScrollReveal().reveal('.profile-lib-area');
      // })

    });

    return {
      userData,
      profileImgPath,
      editMode,
      changeProfile,
      changeEditMode,
      doSave,
    };
  },
});
</script>

<template>
  <section class="my-page-page">
    <div class="profile-img-area">
      <img class="profile-img" :src="profileImgPath"/>
      <div class="profile-img-bg">
        <label for="profileImg">
          <i class="fa-solid fa-pen"></i>
        </label>
        <input
            @change="changeProfile"
            type="file"
            id="profileImg"
            accept="image/*"
        />
      </div>
    </div>
    <div class="profile-data-area">
      <form id="form">
      <span>
        <p>이름 :</p>
        <input type="text" name="userName" :value="userData?.userName" disabled="disabled">
      </span>
        <span>
        <p>이메일 :</p>
        <input type="text" name="userEmail" :value="userData?.userEmail" :disabled="!editMode">
      </span>
        <span>
        <p>주소 :</p>
        <input type="text" name="userAddress" :value="userData?.userAddress" :disabled="!editMode">
      </span>
        <!--        <span>-->
        <!--        <p>번호 :</p>-->
        <!--        <input type="text" name="userPhone" :value="userData?.userPhone" :disabled="!editMode">-->
        <!--      </span>-->
      </form>
      <span class="btn">
        <input :class="editMode ? 'edit-mode-btn-active':'edit-mode-btn'"
               type="button"
               @click="changeEditMode"
               value="수정">

         <input
             v-if="editMode"
             class="edit-mode-btn"
             type="button"
             @click="doSave"
             value="저장하기">
      </span>
    </div>
    <!--    <div id="test2"></div>-->
  </section>
</template>

<style scoped></style>
