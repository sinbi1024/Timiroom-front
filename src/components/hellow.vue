<script lang="ts">
import {defineComponent, ref, reactive} from "vue";
export default defineComponent( {
  name: "hellow",
  setup(){
    let count = ref<number>(0);
    let name = ref<string>('신비')

    const click = ()=>{
      count.value += 1;
      console.log(count.value); // 0
    }

    const getImage = (e:HTMLElement)=>{
      console.log(e);
      // if(e) const k = e.target;
      // console.log(e?.target);
    }

    return{
      count,
      name,
      click,
      getImage
    }
},


})
</script>

<template>
<section>
  <div>{{count}}</div>
  <button @click="click">눌러죠</button>
  <input type="file" @change="getImage">
  <div>{{name}}</div>
</section>
</template>
<style scoped>

</style>