<template>
  <div class="card col-7 container" v-if="data">
    <h5 class="card-header">{{ data.name }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ data.gender }}</h5>
      <!-- Button trigger modal -->
      <button type="button" @click="deleteUser(data.id)" class="btn btn-primary">delete</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['data'],

    methods:{
        deleteUser(id){
          console.log(id)
            // if(confirm('Are you sure you want to delete')){
            //   axios.deleteUser()
            //   .then(res => {
            //     console.log(id)
            //   });
            // }
        }
    }


};
</script>

<style>
</style>