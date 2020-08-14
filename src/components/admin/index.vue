<template>
  <v-row>
    <!-- <v-col cols="12">
      <productsTable></productsTable>
    </v-col>-->
    <!-- 
    <v-col cols="12">
      <usersTable></usersTable>
    </v-col>-->
    <v-col cols="12">
      <router-view></router-view>
    </v-col>
    <v-col cols="12">
      <router-view class="view two" name="a"></router-view>
    </v-col>
    <v-col cols="12">
      <router-view class="view three" name="b"></router-view>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
