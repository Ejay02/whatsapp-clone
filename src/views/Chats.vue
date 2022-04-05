<template>
  <div>

    <Header/>
    <section class="m-2 flex">
      <div>
        <img src="../assets/8.jpg"
        class="h-12 w-12 rounded-full"/>
      </div>
      <article >
        <div class="flex">
          <h2>Name</h2>
          <p>Time</p>
        </div>
        <div class="flex">
          <p>message</p>
          <p>count</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Header from '@/components/chats/Header.vue';
export default {
  name: "ChatsPage",
  // eslint-disable-next-line vue/no-unused-components
  components: { Header },

  setup(){
    return {
      Header
    };
  },
  
};
</script>

<style></style>
