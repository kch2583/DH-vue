<template>
  <v-app>
    <v-container>
      <logoAndMenu></logoAndMenu>
      <router-view></router-view>
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
            <v-card-text class="text-sm-h4 text-xl-h2">HIGH QUALITY ARTIFICIAL LEATHER</v-card-text>
            <v-card align="center" justify="center" flat>
              <v-card-text class="text-sm-h6 text-xl-h4">제품 보러 가기 -></v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-footer absolute>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import logoAndMenu from "./components/home/logoAndMenu";
export default {
  name: "App",

  components: { logoAndMenu },

  data: () => ({
    //
  })
};
</script>
<style scoped>
</style>
