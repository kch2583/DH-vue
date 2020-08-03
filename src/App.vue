<template>
  <v-app>
    <v-container>
      <v-row>
        <v-img
          :src="require('./assets/daehyunLogo.png')"
          alt="daehyun Logo"
          contain
          height="7vh"
        ></v-img>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs centered hide-slider optional show-arrows center-active>
            <v-tab class="text-sm-h6 text-xl-h4" :ripple="false"
              >Products</v-tab
            >
            <v-tab class="text-sm-h6 text-xl-h4" :ripple="false"
              >About us</v-tab
            >
            <v-tab class="text-sm-h6 text-xl-h4" :ripple="false"
              >Contact us</v-tab
            >
          </v-tabs>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" align="center" justify="center">
          <v-img
            :src="require('./assets/leather1.png')"
            class="rounded-circle ma-5"
            max-width="50vw"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card align="center" justify="center" flat>
            <v-card-text class="text-sm-h4 text-xl-h2"
              >HIGH QUALITY ARTIFICIAL LEATHER</v-card-text
            >
            <v-card align="center" justify="center" flat>
              <v-card-text class="text-sm-h6 text-xl-h4"
                >제품 보러 가기 -></v-card-text
              >
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-tab::before {
  background: transparent;
}
.v-tab--active {
  color: red !important;
}
</style>
