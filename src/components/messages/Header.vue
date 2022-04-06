<template>
  <header class="bg-wa-dark flex justify-between text-white fixed w-full">
    <div class="p-2 flex">
      <router-link to="/">
        <i class="fas fa-arrow-left text-white py-4"></i>
      </router-link>
      <div class="px-2">
        <!-- :src="data.image"  -->
        <img src="../../assets/8.jpg" class="h-12 w-12 rounded-full" />
      </div>
      <div class="px-2">
        <h1>Whitmans Chat</h1>
        <p class="text-sm">Labaks, Uzor, Anthony, Alice</p>
      </div>
    </div>
    <div class="py-5">
      <span class="material-icons px-2 transform -rotate-45">attach_file</span>
      <span class="material-icons px-2">more_vert</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MessagesHeader",

  props: ["data"],
};
</script>

<style></style>
