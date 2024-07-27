<template>
  <div>
    <nav class="navbar navbar-brad bg-light px-4 border-bottom">
      <button class="navbar-toggler border border-danger" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="navbar-brand" href="#">Home</a>
      <a class="navbar-brand" href="#">About</a> -->
    </nav>
  </div>
  <div class="mt-3 px-md-5">
    <table class="table">
      <thead class="bg-secondary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Profile</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in persons" :key="index">
          <th scope="row">{{ index + 1 }}</th>
					<th class=""><img :src="person.profile" class="rounded-circle" width="35"></th>
          <td>{{ person.frist_name }}</td>
          <td>{{ person.last_name }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex gap-3 container-md mt-5">
    <div class="card border-dark" style="width: 18rem" v-for="(fruit, index) in fruits" :key="index">
      <h4 class="card-header text-center">{{ fruit.name }}</h4>
      <div class="card-body">
        <img 
        :src="fruit.image"
        style="width: 70%; height: 45%"
        >
        <h5>Price: {{ fruit.price }}</h5>
        <p class="card-text">{{ fruit.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {
          profile: require('./imgPerson/veak.jpg'),
          frist_name: "Yen",
          last_name: "Yon",
          age: 18,
        },
        {
          profile: require('./imgPerson/veak.jpg'),
          frist_name: "Ny",
          last_name: "Mar",
          age: 18,
        },
        {
          profile: require('./imgPerson/veak.jpg'),
          frist_name: "Em",
          last_name: "Chhar",
          age: 18,
        },
      ],
      fruits: [
        {
          name: "Apple",
          image: require('./Img/Apple.png'),
          price: "12$",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          name: "Pine Apple",
          image: require('./Img/PineApple.png'),
          price: "13$",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          name: "Orange",
          image: require ('./Img/Orange.png'),
          price: "20$",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          name: "Wood Apple",
          image: require("./Img/WoodApple.png"),
          price: "23$",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
  },
};
</script>
<style>
.card-body img{
  text-align: center;
  margin-left: 40px;
}
</style>