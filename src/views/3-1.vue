<template>
  <div class="home">
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'axios3-1',
  created(){
    axios.create({
        baseURL:'http://localhost:8080',
        timeout: 1000
        
    })
    axios.get('/data.json').then((res)=>{
      console.log(res)
    })
  }
}
</script>
