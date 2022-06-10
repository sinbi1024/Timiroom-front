<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from "vue";

export default defineComponent({
  name: "tech",
  setup() {
    const width = window.innerWidth;
    const scrollValue = ref<number>(0);
    const scrollEvent = () => {
      const scroll = addEventListener('scroll', () => {
        scrollValue.value = window.scrollY;
        console.log("tech: ", scrollValue.value);
      })
    }

    onMounted(() => {
      scrollEvent();
      const v = document.getElementsByClassName('service-card');
      console.log('client height : ', v);
      // console.log('client height : ', v[0].offsetTop);
      nextTick(() => {
      })
    })

    return {
      width,
      scrollValue,
    }
  }
})
</script>

<template>
  <article class="tech">
    <div class="user-wrap">
      <div class="user-img-tech">
      </div>
      <div class="user-text">
        <span class="inner-text">Technologies of Our System</span><br>
        <div class="inner-sub-text">관리자 시스템을 위한 기술은 꾸준히 발전하고 있습니다.</div>
      </div>
    </div>

    <section>
      <div class="tech-context">
        <div class="tech-title">
          <img class="icon">
          <div class="tech-main-title">
            색상 감지 모듈을 이용한 불량품 감지 및 분리
          </div>
        </div>
        <div class="smf-tech">
          <div
              :class="width > 520 && scrollValue > 480 ? 'fade-actived' : width <= 520 && scrollValue > 70 ? 'fade-actived' : 'fade-action'">
            <img class="point-conveyor">
          </div>
          <div class="tech">
            <b>색상을 감지</b>해서 하드웨어 <b>내부적 로직</b>을 통해<br>
            불량을 감지하고 불량 여부에 따라서 분류 바에 달린<br>
            <b>서보모터</b>의 각도가 바뀌어 정상 제품과 불량 제품을 구분합니다.
          </div>
        </div>

        <div class="tech-title">
          <img class="icon">
          <div class="tech-main-title">
            웹을 통한 설비의 가동 제어
          </div>
        </div>
        <div class="smf-tech">
          <div
              :class="width > 520 && scrollValue > 1180 ? 'fade-actived' : width <= 520 && scrollValue > 560 ? 'fade-actived' : 'fade-action'">
            <img class="point-web-control">
          </div>
          <div class="tech">
            웹에서 각 설비의 가동 현황을 모니터링 할 뿐만 아니라,<br>
            ON/OFF 버튼을 이용하여 <b>웹을 통한 제어</b>도 가능합니다.<br>
            관리자는 제어가 필요한 경우, <b>현장에 가지 않고도</b> 설비를 제어할 수 있습니다.
          </div>
        </div>

        <div class="tech-title">
          <img class="icon">
          <div class="tech-main-title">
            실시간 데이터 수집을 통한 빠른 모니터링 제공
          </div>
        </div>
        <div class="smf-tech">
          <div
              :class="width > 520 && scrollValue > 1840 ? 'fade-actived' : width <= 520 && scrollValue > 1040 ? 'fade-actived' : 'fade-action'">
            <img class="point-data-collect">
          </div>
          <div class="tech">
            제품 정보, 생산 현황과 같이 <b>생산 공정에서 발생하는 데이터</b>들을 수집하여<br>
            관리자에게 빠른 <b>모니터링 시스템</b>을 지원함으로써 관리자의 <b>유연한</b> 현장 대처와<br>
            작업 지시에 있어서 <b>합리적</b>인 의사 결정을 도울 수 있습니다.
          </div>
        </div>
      </div>
    </section>
  </article>
</template>