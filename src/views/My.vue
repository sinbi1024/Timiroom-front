<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {userInfo, userTypeInterface} from "../data/types";


export default defineComponent({
  name: "My",
  setup() {
    const profileImgPath = ref<string>("/assets/image/cat.png");
    const filePreview = ref<Blob | null>(null);
    const userData = ref<userTypeInterface | null>(null);
    const editMode = ref<boolean>(false);

    const changeProfile = (e: Event) => {
      const v = e.target as HTMLInputElement;
      console.log(v.files[0]);
      filePreview.value = URL.createObjectURL(v.files[0]) as Blob;
      profileImgPath.value = filePreview.value as string;
    };

    const setUserInfo = (userInput: userInfo) => {
      let inputInfo = JSON.stringify(userInput);
      localStorage.setItem("userInput", inputInfo);
    };

    const getUserInfo = () => {
      userData.value = JSON.parse(
          localStorage.getItem("userInput")
      ) as userTypeInterface;
      console.log(userData.value);
    };

    const changeEditMode = () => {
      editMode.value = !editMode.value;
      console.log(editMode.value);
    }
    const doSave = () => {
      let data = document.getElementById('form');
      let formData = new FormData(data as HTMLFormElement);
      for (let i of formData.entries()) {
        console.log(i);
      }
      //axios
      console.log('do Save')
    }

    const playSvg = () => {
      const vivus = new Vivus('test2', {duration: 200, file: '/assets/image/svg/test2_animated.svg'}, (v) => {
        v.play(v.getStatus() === 'end' ? -1 : 1);
      });
    }

    onMounted(() => {
      getUserInfo();
      playSvg();
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
        <input type="text" name="userName" :value="userData?.userName" :disabled="!editMode">
      </span>
        <span>
        <p>이메일 :</p>
        <input type="text" name="userEmail" :value="userData?.userEmail" :disabled="!editMode">
      </span>
        <span>
        <p>주소 :</p>
        <input type="text" name="userAddress" :value="userData?.userAddress" :disabled="!editMode">
      </span>
        <span>
        <p>번호 :</p>
        <input type="text" name="userPhone" :value="userData?.userPhone" :disabled="!editMode">
      </span>
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
    <div id="test2"></div>
  </section>
</template>

<style scoped></style>
