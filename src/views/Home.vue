<script lang="ts">
import {defineComponent, ref, onMounted} from "vue";

export default defineComponent({
  name: "PageInit",
  setup() {

    return {}
  },
})
</script>

<template>
  <article class="main">
    <div class="user-wrap">
      <div class="user-img-main">
        <div class="user-text">
          <span class="inner-text">SMART FACTORY</span><br>
          <span class="inner-sub-text">미래 제조 혁신, 스마트 팩토리</span>
        </div>
      </div>
    </div>

    <section>
      <div class="main-card">
        <div class="main-title">
          왜 스마트 팩토리입니까?
        </div>
        <div class="main-context">
          많은 기업이 사업 환경 변화에 따른 위기를 맞고 있습니다.<br>
          하지만 그동안 구축해온 생산 방식, 비용 중심의 제조 및 물류 체계는 다양성 수용 및 새로운 환경 적응 등 곳곳에서 한계를 갖습니다.<br>
          그래서 기업들은 <b>스마트 팩토리</b>를 선택하고 있습니다.
        </div>
      </div>
    </section>
  </article>
</template>