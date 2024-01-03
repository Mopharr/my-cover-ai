<template>
  <div class="table">
    <div class="orderTop">
      <h2>Product</h2>
      <div class="method">
        <button @click="toggleModal"><IoFilterOutline /> Filters</button>
        <FilterModal
          v-if="showModal"
          :categories="['all', 'Health', 'Auto', 'Gadget', 'Package']"
          @select="applyFilter"
        />
        <div class="input">
          <IconsSearch class="search" />
          <input type="text" placeholder="search" v-model="searchQuery" />
        </div>
      </div>
    </div>
    <div class="proDuctTable">
      <table class="inTable">
        <thead>
          <tr class="poHead">
            <th>Name</th>
            <th>Amount</th>
            <th>Product Category</th>
            <th>Product Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in filteredProducts"
            :key="product?.id"
            class="Tbody"
          >
            <td>
              <input type="checkbox" />
              <div class="tName">
                <h4 class="nIcon">{{ product.name[0] }}</h4>
                <div class="userTName">
                  <h2>{{ product.name }}</h2>
                </div>
              </div>
            </td>
            <td>${{ product.price }}</td>
            <td>
              <p>{{ product.productCategory.name }}</p>
            </td>
            <td :class="getStatusClass(product.active)">
              {{ capitalizeFirstLetter(product.active.toString()) }}
            </td>
            <td>{{ product.created_at }}</td>
            <td class="tabAct">
              <IconsDot />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "../store/Product";
import FilterModal from "./FilterModal.vue"; 

export default {
  components: {
    FilterModal,
  },
  setup() {
    const showModal = ref(false);
    const searchQuery = ref("");
    const productStore = useProductStore();

    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    onMounted(async () => {
      await productStore.fetchProduct();
    });

    const getStatusClass = (status) => {
      return status ? "status-true" : "status-false";
    };

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const filteredProducts = computed(() => {
      if (!searchQuery.value) {
        return productStore.products;
      }
      return productStore.products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const applyFilter = (category) => {
      productStore.filterByCategory(category);
      showModal.value = false;
    };

    return {
      productStore,
      getStatusClass,
      capitalizeFirstLetter,
      applyFilter,
      filteredProducts,
      toggleModal,
      showModal,
      searchQuery,
    };
  },
};
</script>

<style>
@import url("../Asset/Table.css");
</style>
