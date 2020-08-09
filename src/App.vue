<template>
  <v-app>
    <v-container>
      <logo minWidth="100px" maxWidth="17vw"></logo>
      <tabs></tabs>
      <router-view class="pb-12"></router-view>

      <v-footer class="mt-7" padless absolute>
        <div>
          sdkjefoi slkjfeoijef
        </div>
        <div>slkjfls elkfjio slkejfi jslkfejoisjfekl elifjskelf</div>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
            >Freepik</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
          fjwofksjdfl sdoifjwlekfj
          <s>
            seoijfslkdfjsief klsjdflefj
          </s>
        </div>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import tabs from "./components/home/tabs";
import logo from "./components/home/logo";
export default {
  name: "App",

  components: { tabs, logo },

  data: () => ({
    //
  }),
};
</script>
<style scoped></style>
