<template>
  <v-row>
    <!-- <v-col cols="12">
      <productsTable></productsTable>
    </v-col>

    <v-col cols="12">
      <usersTable></usersTable>
    </v-col>-->

    <router-view name="products"></router-view>
    <router-view name="users"></router-view>
  </v-row>
</template>

<script>
// import productsTable from "../admin/productsTable";
// import usersTable from "../admin/usersTable";
export default {
  // components: {
  //   productsTable,
  //   usersTable
  // }
};
</script>

<style></style>
