<template>
  <div class="container col-4">
    <ProfileVue :user="user" @see-more="showMore"></ProfileVue>
  </div>
  <TableComponentVue :data="data"></TableComponentVue>
</template>
  
  <script>
import ProfileVue from "@/components/Profile.vue";
import TableComponentVue from "@/components/TableComponent.vue";

export default {
  components: {
    ProfileVue,
    TableComponentVue,
  },
  data() {
    return {
      user: {
        id: 1,
        name: "Yen Yon",
        age: 18,
        gender: "Male",
        profile:
          "https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg",
      },
      data: "",
    };
  },
  methods: {
    showMore(data) {
      // alert(data)
      this.data = data;
    },
  },
};
</script>
  
  <style>
</style>