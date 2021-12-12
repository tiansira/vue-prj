<template>
  <div class="container-fluid" id="head">
    <div class=" jumbotron-fluid">
      <div class="container">
        <h1>CN45 Library</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
  </div>
</div>

<!-- 导航 -->
<div class="container">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div>
       <nav class="navbar float-right">
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Input book name" aria-label="Search">
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <table class="table table-sm ">
    <thead>
    <tr class="table-success">
      <th scope="col">id</th>
      <th scope="col">Book_name</th>
      <th scope="col">author</th>
      <th scope="col">Classify</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  <td>1</td>
  <td >2</td>
  <td >3</td>
  <td >4</td>
  <td >可借</td>
  <td>
    <button class="btn btn-info" data-toggle="modal" data-target="#staticBackdrop">借出</button>
  </td>
    </tr>
    <tr>
  <td>1</td>
  <td >2</td>
  <td >3</td>
  <td >4</td>
  <td >已借出</td>
    </tr>
  </tbody>
  </table>
   <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
</div>






<!-- 弹窗 -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Request Book</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="">
          <div class="form-group">
            <label for="">Book_Id</label>
            <input class="form-control" type="text">
          </div>
          <div class="form-group">
            <label for="">Your Email</label>
            <input class="form-control" type="email">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
//import axios from 'axios'
export default {
  name: 'index',
  components: {
    
  },
  created(){
   
  }
}

window.onload = function(){
  new Vue({
    el: "#my",
    data:{
      getLists:function(){
         axios.get('/data.json').then((res)=>{
            console.log(res)
        })
      }
    },
    methods:{

    },
    mounted: function(){
       this.getLists();
    }
  })
}
</script>
<style>
#head{
    background-color: #8652B8;
    color: white;
}
</style>