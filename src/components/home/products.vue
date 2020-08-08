<template>
  <div>
    <v-row>
      <v-col v-for="product in 27" :key="product" cols="6" sm="4" md="2">
        <v-card rounded elevation="6">
          <v-card-title class="text-h6">#1001</v-card-title>
          <v-img :src="require('../../assets/leather1.png')"></v-img>
          <v-card-text>
            <v-chip-group column multiple>
              <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-pagination
          v-model="page"
          circle
          :length="length"
          :page="page"
          :total-visible="totalVisible"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing"
    ],
    page: 1,
    length: 10,
    totalVisible: 10
  })
};
</script>

<style></style>
