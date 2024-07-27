<template>
  <div class="container">
    <form @submit.prevent="createCategory">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="data.name"
          aria-describedby="emailHelp"

        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="data.description" ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <h1>List Category</h1>
    <ul class="list-group mt-4">
      <li
        class="list-group-item m-3"
        v-for="category in categories"
        :key="category.id"
      >
        <h4>{{ category.name }}</h4>
        <p>{{ category.description }}</p>
        <button class="btn btn-info btn-sm m-2">
          Show Details
        </button>
        <button class="btn btn-secondary btn-sm m-2"  @click="EditCatgory(category.id)">Edit</button>
        <button class="btn btn-danger btn-sm m-2" @click="deleteCategory(category.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      data: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/category/list"
        );
        if (response.data.success) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async deleteCategory(categoryId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/category/delete/${categoryId}`
        );
        if (response.data.success) {
          // Remove the deleted category from the local array
          this.categories = this.categories.filter(category => category.id !== categoryId);
          console.log("Category deleted successfully.");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
    async createCategory() {
      // console.log()
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/category/create",
          this.data
        );
        if (response.data.success) {
          this.fetchCategories();
          this.data = {
            name: "",
            description: "",
          };
        }
      } catch (error) {
        console.error("Error creating category:", error);
      }
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
