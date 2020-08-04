import Vue from "vue";
import VueRouter from "vue-router";
import products from "../src/components/";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    // {
    //   path: "/",
    //   component: Home,
    // },
    {
      path: "/products",
      component: products,
    },
    {
      path: "/contactus",
      component: ContactUs,
    },
  ],
});
