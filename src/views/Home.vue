<script lang="ts">
import {defineComponent, ref, onMounted} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {
    const imageUrls = [
      "../../public/assets/image/banner2.png",
      "../../public/assets/image/banner3.png",
    ];

    return {
      imageUrls,
    }
  },
})
</script>

<template>
  <section>
    <div class="user-wrap">
      <div class="user-img">
        <img class="banner" src="../../public/assets/image/banner1.png">
      </div>
      <div class="user-text">
        <span class="innerText">SMART FACTORY</span><br>
        <span class="innerSubText">미래 제조 혁신, 스마트 팩토리</span>
      </div>
    </div>
    메인 페이지에는 다른 어떤 구성이 추가되어야 할까요?
  </section>
</template>