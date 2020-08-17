<template>
  <v-row>
    <v-col cols="12">
      <typeInfo></typeInfo>
    </v-col>
    <v-col cols="12">
      <productsTable></productsTable>
    </v-col>
  </v-row>
</template>

<script>
import productsTable from "./productsTable";
import typeInfo from "./typeInfo";
export default {
  components: {
    productsTable,
    typeInfo
  }
};
</script>

<style>
</style>