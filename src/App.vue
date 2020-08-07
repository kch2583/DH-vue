<template>
  <v-app>
    <v-container>
      <logoAndMenu></logoAndMenu>
      <router-view></router-view>

      <v-footer absolute>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
            >Freepik</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
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
  }),
};
</script>
<style scoped></style>
