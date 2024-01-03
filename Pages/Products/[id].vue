<template>
  <div class="boardBody">
    <div>
      <div class="dop">
        <div class="dTit">
          <h2>product Details</h2>
          <p>Overview details of Product</p>
        </div>
        <div class="method"></div>
      </div>
    </div>
    <div v-if="productStore.isLoading">Loading...</div>
    <div v-else-if="productStore.error">
      Error: {{ productStore.error.message }}
    </div>
    <div v-else>
      <div class="details">
        <h2>Product Name: {{ productStore?.singleProduct?.name }}</h2>
        <p>Description: {{ productStore?.singleProduct?.description }}</p>
        <span>Price: ${{ productStore?.singleProduct?.price }}</span>
      </div>

      <div class="prodetails">
        <ul class="detailsTittle">
          <li
            :class="{ activeTittle: selectedTab === 'benefit' }"
            @click="selectedTab = 'benefit'"
          >
            Product Benefit
          </li>
          <li
            :class="{ activeTittle: selectedTab === 'usage' }"
            @click="selectedTab = 'usage'"
          >
            How to use
          </li>
          <li
            :class="{ activeTittle: selectedTab === 'claim' }"
            @click="selectedTab = 'claim'"
          >
            Claim
          </li>
        </ul>

        <div class="detailsContent" v-if="selectedTab === 'benefit'">
          <div
            v-if="productStore?.singleProduct?.full_benefits"
            v-html="productStore?.singleProduct?.full_benefits"
          ></div>
          <div class="noVal" v-else>None</div>
        </div>
        <div class="detailsContent" v-if="selectedTab === 'usage'">
          <p v-html="productStore.singleProduct?.how_it_works"></p>
        </div>
        <div class="detailsContent" v-if="selectedTab === 'claim'">
          <p v-html="productStore.singleProduct?.how_to_claim"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../../Asset/productDetails.css");
</style>

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
