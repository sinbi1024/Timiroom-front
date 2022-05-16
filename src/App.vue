<script setup lang="ts">
import ToolBar from './components/toolbar.vue';
import MenuBar from './components/menubar.vue';

</script>

<template>
  <div id="app">
    <ToolBar></ToolBar>
    <MenuBar></MenuBar>
    <router-view/>
  </div>
</template>

<style src="./assets/css/index.css">
</style>