<template>
  <div class="header">
    <form class="border border-success">
      <div class="form-group p-10px">
        <label for="exampleInputEmail1">First name</label>
        <input type="text" class="form-control" placeholder="Enter your first name....">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Last name</label>
        <input type="text" class="form-control" placeholder="Enter your last name....">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Age</label>
        <input type="text" class="form-control" placeholder="Enter your Age....">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Date</label>
        <input type="date" class="form-control" v-model="date_of_birth" />
      </div>

    </form >
    <form class="border border-success">
      <p>Your first name is: {{ first_name }}</p>
      <p>Your last name is: {{ last_name }}</p>
      <p>Your age is: {{ age }}</p>
      <p>Your full name is: {{ getFullName }}</p>
      <p :style="{ color: status_color }">Your Your Status: {{ getStatus }}</p>
      <p>Date: {{ date_of_birth }}</p>

    </form>

  </div>

  <!-- <div>
    <input
      type="text"
      placeholder="Please Enter First Name ..."
      v-model="first_name"
    />
    <input
      type="text"
      placeholder="Please Enter Last Name ..."
      v-model="last_name"
    />
    <input type="number" placeholder="Please Enter Age..." v-model="age" />
    <input type="date" v-model="date_of_birth" />

    <p>Your first name is: {{ first_name }}</p>
    <p>Your last name is: {{ last_name }}</p>
    <p>Your age is: {{ age }}</p>
    <p>Your full name is: {{ getFullName }}</p>
    <p :style="{ color: status_color }">Your Your Status: {{ getStatus }}</p>
    <p>Date: {{ date_of_birth }}</p>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      age: "",
      date_of_birth: "",
    };
  },
  computed: {
    getFullName() {
      return this.first_name + " " + this.last_name;
    },
    getStatus() {
      if (!this.age) {
        return "";
      } else if (this.age >= 18) {
        return "Adult";
      } else {
        return "Child";
      }
    },
    status_color(){
      if(!this.age){
        return '';
      }else if(this.age <=18){
        return 'blue';
      }else{
        return'red';
      }
    }
  },
};
</script>

<style>
/* .form-group{
  margin: 25px;
  width: 90%;

}
.header{
  display: flex;
  flex-direction: row;

}
form {
  width: 30%;
  height: 70%;
} */

</style>