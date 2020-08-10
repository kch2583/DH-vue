import Vue from "vue";
import VueRouter from "vue-router";
import index from "../src/components/home/index.vue";
import products from "../src/components/home/products.vue";
import aboutUs from "../src/components/home/aboutUs.vue";
import contactUs from "../src/components/home/contactUs.vue";
import admin from "../src/components/admin/index.vue";
import productsTable from "../src/components/admin/productsTable.vue";
import usersTable from "../src/components/admin/usersTable.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: index,
    },
    {
      path: "/products",
      component: products,
    },
    {
      path: "/aboutUs",
      component: aboutUs,
    },

    {
      path: "/contactus",
      component: contactUs,
    },
    {
      path: "/admin",
      component: admin,
      children: [
        {
          path: "/products",
          name: "products",
          component: productsTable,
        },
        {
          path: "/users",
          name: "users",
          component: usersTable,
        },
      ],
    },
  ],
});
