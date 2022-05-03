<script setup lang="ts">
import ToolBar from './components/toolbar.vue'
import MenuBar from './components/menubar.vue';
import SlideSec from './components/slide.vue';
</script>

<template>
  <div class="app">
    <ToolBar></ToolBar>
    <MenuBar></MenuBar>
    <SlideSec></SlideSec>
    <router-view/>
  </div>
</template>

<style src="./assets/css/index.css">
</style>