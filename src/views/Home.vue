<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted} from "vue";
// import ScrollOut from "scroll-out";

export default defineComponent({
  name: "home",
  setup() {
    // const test = () => {
    //   const vivus = new Vivus('test-div', {duration: 200, file: '/assets/image/svg/smart-factory.svg'}, (v) => {
    //     v.play(v.getStatus() === 'end' ? -1 : 1);
    //     // v.play(v.getStatus() === 'end' ? -1 : 1)
    //   });
    // }

    onMounted(() => {
      // test();
    })


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
        <img class="point-why-smf">
        <div class="main-context">
          많은 기업이 사업 환경 변화에 따른 위기를 맞고 있습니다.<br>
          하지만 그동안 구축해온 생산 방식, 비용 중심의 제조 및 물류 체계는 다양성 수용 및 새로운 환경 적응 등 곳곳에서 한계를 갖습니다.<br>
          그래서 기업들은 <b>스마트 팩토리</b>를 선택하고 있습니다.
        </div>
      </div>

      <div class="main-card">
        <div class="main-title">
          무엇이 필요합니까?
        </div>
        <img class="point-what-require">
        <div class="main-context">
          설비별로 발생하는 데이터를 빠르게 수집하여 <b>실시간 모니터링</b>을 제공할 수 있어야 합니다.<br>
          제품 판매, 공급망 변화에 대해 생산 시점에서부터 <b>빠르고 유연하게 대응</b>할 수 있어야 합니다.<br>
          <b>설비의 장애 예방 및 가동률 관리</b>를 위해 설비에서 발생하는 데이터를 활용하고자 합니다.
        </div>
      </div>
      <div class="bottom-margin"></div>
    </section>
  </article>
</template>