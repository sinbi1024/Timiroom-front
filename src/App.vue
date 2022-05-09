<script setup lang="ts">
import ToolBar from './components/toolbar.vue'
import MenuBar from './components/menubar.vue';
import SlideSec from './components/banner.vue';
</script>

<template>
  <div id="app">
    <ToolBar></ToolBar>
    <MenuBar></MenuBar>
    <SlideSec></SlideSec>
    <router-view/>
  </div>
</template>

<style src="./assets/css/index.css">
</style>