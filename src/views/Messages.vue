<template>
  <div>
    <MessagesHeader :data="data" />
    <section
      class="h-screen bg-repeat pt-24"
      :style="{
        backgroundImage: `url(${require('@/assets/whatsapp_background.png')})`,
      }"
    >
      <article
        v-for="chat in chats"
        :key="chat.id"
        class="px-3 py-1 flex"
        :class="chat.name == 'you' ? 'justify-end' : ''"
      >
        <div
          class="rounded px-3 w-9/12 shadow"
          :class="chat.name == 'you' ? 'bg-wa-lighter' : 'bg-white'"
        >
          <!-- pointed edge -->
          <span
            class="material-icons text-5xl absolute text-white"
            :class="
              chat.name == 'you'
                ? 'right-0 -mr-3 -mt-5 text-wa-lighter'
                : 'left-0 -mt-5 -ml-3'
            "
            >arrow_drop_down</span
          >
          <h1 class="text-red-500">{{ chat.name }}</h1>
          <div>
            <p>{{ chat.message }}</p>
            <p class="text-xs text-gray-500">{{ chat.time }}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import MessagesHeader from "@/components/messages/Header.vue";
export default {
  components: {
    MessagesHeader,
  },
  name: "MessagesPage",

  data() {
    return {
      chats: [
        {
          name: "Francis Whitmans",
          message: "😜😝 Anyone who want to tag along is more than welcome",
          time: "11:39 AM",
        },
        {
          name: "you",
          message: "🚤🏊🏄⛵🚣🌅💭",
          time: "11:42 AM",
        },
      ],
    };
  },

  setup() {
    return {
      MessagesHeader,
    };
  },
};
</script>

<style></style>
