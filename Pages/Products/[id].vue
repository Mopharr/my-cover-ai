<template>
  <div>
    event id: {{ $route.params.id }}
    <div v-if="productStore.isLoading">Loading...</div>
    <div v-else-if="productStore.error">
      Error: {{ productStore.error.message }}
    </div>
    <div v-else>
      <div class="proDe">
        <h2>Product Name: {{ productStore?.singleProduct?.name }}</h2>
        <p>Description: {{ productStore?.singleProduct?.description }}</p>
        <span>Price: ${{ productStore?.singleProduct?.price }}</span>
      </div>

      <div class="prodetailsContent">
        <ul>
          <li @click="selectedTab = 'benefit'">Product Benefit</li>
          <li @click="selectedTab = 'usage'">How to use</li>
          <li @click="selectedTab = 'claim'">Claim</li>
        </ul>
        <div v-if="selectedTab === 'benefit'">
          <div v-html="productStore?.singleProduct?.full_benefits"></div>
        </div>
        <div v-if="selectedTab === 'usage'">
          <p v-html="productStore.singleProduct?.how_it_works"></p>
        </div>
        <div v-if="selectedTab === 'claim'">
          <p v-html="productStore.singleProduct?.how_to_claim"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
definePageMeta({
  layout: "dashboard",
});
import { useProductStore } from "../store/Product";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();
    const productStore = useProductStore();
    const productId = route.params.id;
    const selectedTab = ref("benefit");

    onMounted(async () => {
      if (productId) {
        await productStore.fetchSingleProduct(productId);
        console.log("Fetched product:", productStore.singleProduct.name);
      }
    });
    return { productStore, selectedTab };
  },
};
</script>
