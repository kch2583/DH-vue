<template>
  <div>
    <v-row align="center" justify="center">
      <router-link to="/" exact>
        <v-img
          :src="require('../../assets/daehyunLogo.png')"
          alt="daehyun Logo"
          contain
          height="7vh"
        ></v-img
      ></router-link>
    </v-row>
    <v-row>
      <v-col>
        <v-tabs centered hide-slider optional show-arrows center-active>
          <v-tab
            v-for="menuList in menuLists"
            :key="menuList.name"
            :to="menuList.linkTo"
            class="text-sm-h6 text-xl-h4"
            :ripple="false"
            >{{ menuList.name }}</v-tab
          >
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        { name: "Products", linkTo: "/products" },
        { name: "About us", linkTo: "/aboutUs" },
        { name: "Contact us", linkTo: "/contactUs" },
      ],
    };
  },
};
</script>

<style>
.v-tab:before {
  background: transparent !important ;
}
.v-tab::before {
  background: transparent;
}
.v-tab--active {
  color: red !important;
}
</style>
