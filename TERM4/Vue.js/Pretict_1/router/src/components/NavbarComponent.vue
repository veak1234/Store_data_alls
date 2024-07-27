<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        <router-link class="nav-link active" aria-current="page" to="/"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="#">About</a> -->
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="#">Categoy</a> -->
        <router-link class="nav-link" to="/category">Category</router-link>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
</style>