<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  setup() {

    return {}
  }
})
</script>

<template>
  <article class="summary">
    <div class="user-wrap">
      <div class="user-img-summary">
      </div>
      <div class="user-text">
        <span class="inner-text">New Things, New Values</span><br>
        <div class="inner-sub-text">새로운 기술에 발맞춰 새로운 가치를 만들어갑니다.</div>
      </div>
    </div>

    <div class="summary-context">
      <div class="sub-title">
        <img class="icon">
        <div class="summary-sub-title">
          First. Smart Factory
        </div>
      </div>

      <div class="summary-title">
        스마트 팩토리란?
      </div>

      <div class="smf-sum">
        <b>4차 산업혁명 시대</b>에, 공장은 과연 어떻게 살아남을 수 있을까요?<br>
        첨단 IT기술과 인공지능(AI)과의 융복합 트렌드를 적극 받아들여 대응하기 위한 전략이 바로 <b>스마트 팩토리</b>입니다.<br>
        <b>‘미래형 공장’, ‘지능형 공장’</b>이라고 불리는 스마트 팩토리는,
        디지털 데이터와 ICT 기술이 결합된 새로운 플랫폼으로,<br>
        인력 의존도가 높았던 전통 방식의 한계에 대한 대안으로 꼽히고 있습니다.
      </div>

      <div class="sub-title">
        <img class="icon">
        <div class="summary-sub-title">
          Second. Problems
        </div>
      </div>

      <div class="summary-title">
        기존 시스템의 문제점
      </div>

      <div class="problems-sec">
        <img class="problems" src="../../public/assets/image/problems.png">
      </div>

      <div class="sub-title">
        <img class="icon">
        <div class="summary-sub-title">
          Third. Management System
        </div>
      </div>

      <div class="summary-title">
        관리자 시스템이란?
      </div>

      <div class="smf-sum">
        <b>관리자 시스템</b>이란 공장의 생산현장에서 발생하는 데이터들을 기록하고 통합하여<br>
        <b>운영 최적화</b>를 이루는 것을 주 목적으로 하는 시스템이다.<br>
        기계, 설비, 작업자, 작업 현황으로부터 발생하는 정보를 <b>실시간</b>으로 수집, 처리하는 시스템에서<br>
        <b>생산 정보 시스템을 총괄</b>하는 시스템으로 확장될 수 있다.
      </div>
    </div>
    <div class="bottom-margin"></div>
  </article>
</template>