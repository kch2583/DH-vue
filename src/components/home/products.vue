<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Filter</v-card-title>
          <v-card-text>
            <v-chip-group multiple>
              <div v-for="type in productType" :key="type.typeNumber">
                <v-chip filter @click="filter(type)">{{ type.type}}</v-chip>
              </div>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="productList in filteredProductLists"
        :key="productList.id"
        cols="6"
        sm="4"
        md="2"
      >
        <v-card rounded elevation="6">
          <v-card-title class="text-h6">{{productList.number}}</v-card-title>
          <v-img :src="require('../../assets/' + productList.image)"></v-img>
          <v-card-text>
            <v-chip-group multiple column>
              <div v-for="type in productType" :key="type.typeNumber">
                <v-chip v-if="type.typeNumber === productList.type">{{ type.type }}</v-chip>
              </div>
              <v-chip :color="productList.color">{{ productList.color }}</v-chip>
              <v-chip>{{ productList.pattern }}</v-chip>
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
import products from "../../data/product.json";
import pType from "../../data/productType.json";
export default {
  data: () => ({
    productType: pType,
    productLists: products,
    filteredType: [],
    page: 1,
    length: 10,
    totalVisible: 10
  }),

  computed: {
    filteredProductLists: function() {
      if (!this.filteredType.length) {
        return this.productLists;
      } else {
        for (let i = 0; i < this.filteredType.length; i++) {
          const type = this.filteredType[i];
          if (
            this.productLists.filter(function(e) {
              console.log(e);
              console.log(type);
            })
          ) {
          }
        }
        return this.productLists;
      }
    }
  },
  methods: {
    filter(type) {
      if (this.filteredType.indexOf(type.typeNumber) !== -1) {
        this.filteredType.splice(this.filteredType.indexOf(type.typeNumber), 1);
      } else {
        this.filteredType.push(type.typeNumber);
      }
    }
  }
};
</script>

<style></style>

