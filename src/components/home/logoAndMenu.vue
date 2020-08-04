<template>
  <v-container>
    <v-row>
      <v-img :src="require('../../assets/daehyunLogo.png')" alt="daehyun Logo" contain height="7vh"></v-img>
    </v-row>
    <v-row>
      <v-col>
        <v-tabs centered hide-slider optional show-arrows center-active>
          <v-tab class="text-sm-h6 text-xl-h4" :ripple="false">Products</v-tab>
          <v-tab class="text-sm-h6 text-xl-h4" :ripple="false">About us</v-tab>
          <v-tab class="text-sm-h6 text-xl-h4" :ripple="false">Contact us</v-tab>
        </v-tabs>
        <v-tabs>
          <v-tab
            v-for="menuList in menuLists"
            :key="menuList.name"
            :to="menuList.linkTo"
            class="text-sm-h6 text-xl-h4"
            :ripple="false"
          >{{ menuList.name }}</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        { name: "Products", linkTo: "/products" },
        { name: "About us", linkTo: "/aboutUs" },
        { name: "Contact us", linkTo: "/contactUs" }
      ]
    };
  }
};
</script>

<style>
.v-tab::before {
  background: transparent;
}
.v-tab--active {
  color: red !important;
}
</style>