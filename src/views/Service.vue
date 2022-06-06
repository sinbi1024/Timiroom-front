<script lang="ts">
import {defineComponent, nextTick, onMounted, ref} from "vue";

export default defineComponent({
  name: "service",
  setup() {
    const scrollValue = ref<number>(0);
    const scrollEvent = () => {
      const scroll = addEventListener('scroll', () => {
        scrollValue.value = window.scrollY;
        console.log(scrollValue.value);
      })
    }

    scrollEvent();
    const v = document.getElementsByClassName('service-card');
    console.log('client height : ', v);
    // console.log('client height : ', v[0].offsetTop);
    nextTick(() => {
    })

    return {
      scrollValue,
    }
  }
})
</script>

<template>
  <article class="service">
    <div class="user-wrap">
      <div class="user-img-service">
      </div>
      <div class="user-text">
        <span class="inner-text">Service for Smart Factory</span><br>
        <div class="inner-sub-text">스마트 팩토리에 최적화된 모니터링 시스템을 제공합니다.</div>
      </div>
    </div>

    <section>
      <p>* 아래 이미지들은 실제 구현 화면과 다소 차이가 있음을 알려 드립니다.</p>
      <div :class="scrollValue > 220 ? 'slide-left-action' : 'slide-left-actived'">
        <div class="service-card">
          <img class="monitoring-of-product">
          <div :class="scrollValue > 500 ? 'fade-actived' : 'fade-action'">
            <div class="about">
              <div class="service-title">
                제품 정보
              </div>
              <div class="service-context">
                생산 공정에 필요한 품목 코드, 품목명, 생산일자와 같은<br>
                제품 정보를 표시해준다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="scrollValue > 820 ? 'slide-left-action' : 'slide-left-actived'">
        <div class="service-card">
          <img class="monitoring-of-progress">
          <div :class="scrollValue > 1110 ? 'fade-actived' : 'fade-action'">
            <div class="about">
              <div class="service-title">
                작업 진행 현황
              </div>
              <div class="service-context">
                설비의 가동 상태와 생산 공정에서 발생하는 데이터를<br>
                실시간으로 가져와 표시해준다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="scrollValue > 1500 ? 'slide-left-action' : 'slide-left-actived'">
        <div class="service-card">
          <img class="monitoring-of-target">
          <div :class="scrollValue > 1710 ? 'fade-actived' : 'fade-action'">
            <div class="about">
              <div class="service-title">
                생산 현황
              </div>
              <div class="service-context">
                관리자가 입력한 하루 생산 목표량과 현재 실시간 생산량을 표시하여<br>
                생산 실적을 파악할 수 있도록 한다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="scrollValue > 2100 ? 'slide-left-action' : 'slide-left-actived'">
        <div class="service-card">
          <img class="monitoring-of-environ">
          <div :class="scrollValue > 2320 ? 'fade-actived' : 'fade-action'">
            <div class="about">
              <div class="service-title">
                공장 환경
              </div>
              <div class="service-context">
                공장의 온도, 습도, 미세먼지 농도의 환경 데이터를<br>
                센서로부터 받아서 표시해준다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="scrollValue > 2680 ? 'slide-left-action' : 'slide-left-actived'">
        <div class="service-card">
          <img class="monitoring-of-total">
          <div :class="scrollValue > 2925 ? 'fade-actived' : 'fade-action'">
            <div class="about">
              <div class="service-title">
                종합 모니터링
              </div>
              <div class="service-context">
                요약적으로 표시될 필요가 있는 주요 데이터를 표시하고,<br>
                그로부터 산출한 통계적 결과를 제공한다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-margin"></div>
    </section>
  </article>
</template>