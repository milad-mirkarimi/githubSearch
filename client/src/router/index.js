import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../components/Users.vue";
import Topics from "../components/Topics.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users
  },
  {
    path: "/topics",
    name: "Topics",
    component: Topics
  },
  { path: '*', 
    component: NotFoundComponent 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
