<template>
    <div class="navbaer">
      <NavbarComponent/>
    </div>
    <div style="height: 105px"></div>
    <div class="mb-10">
      <router-view></router-view>
    </div>
    <FooterComponentVue/>
</template>

<script>
import FooterComponentVue from './components/FooterComponent.vue';
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponentVue,
  }
};
</script>
<style>
.navbaer{
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
}

</style>