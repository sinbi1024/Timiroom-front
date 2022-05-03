<script lang="ts">
import {defineComponent, ref, reactive, onMounted} from "vue";
export default defineComponent( {
  name: "hellow",
  props:{
    text:{
      type: String,
      required: true
    }
  },
  setup(props){
    let count = ref<number>(0);
    let name = ref<string>('신비')

    onMounted(()=>{
      console.log(props.text);
    })

    const click = ()=>{
      count.value += 1;
      console.log(count.value); // 0
      this.store.state.click = 1;
      this.store.mutations('click',1);
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
  <button @click="click">1씩 증가</button><br>
  <input type="file" @change="getImage">
  <div>{{name}}</div>
</section>
</template>

<style scoped>

</style>