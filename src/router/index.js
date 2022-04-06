import { createRouter, createWebHistory } from "vue-router";
import Chats from "../views/Chats.vue";

const routes = [
  {
    path: "/calls",
    name: "Calls",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calls.vue"),
  },
  {
    path: "/",
    name: "Chats",
    component: Chats,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Messages.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
