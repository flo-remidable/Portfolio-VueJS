import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Presentation from "../components/Presentation.vue";
import Contact from "../components/Contact.vue";
import Creation from "../components/Creation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/presentation",
      name: "presentation",
      component: Presentation,
    },

    {
      path: "/Creation",
      name: "Creation",
      component: Creation,
    },

    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
