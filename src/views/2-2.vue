<template>
 <div>
     This is test 2-2 view
 </div>
  
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default {
  name: 'axios2-2',
  components: {
   
  },
  created(){
    axios.get('/data.json',{
        params:{
            id:12
        }
    }).then((res)=>{
      console.log(res)
    })

//post
    let data ={
        id:12
    }
    axios.post('/post',data).then((res) =>{
        console.log(res)
    })
  }
}
</script>
