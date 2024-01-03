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
          <input placeholder="search" />
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
            v-for="product in productStore.products"
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
            <td>{{ product.price }}</td>
            <td>
              <p>{{ product.productCategory.name }}</p>
            </td>
            <td :class="getStatusClass(product.active)">
              {{ capitalizeFirstLetter(product.active.toString()) }}
            </td>
            <td>{{ product.created_at }}</td>
            <td class="tabAct">
              <font-awesome-icon icon="ellipsis-v" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "../store/Product";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const showModal = ref(false);
    const productStore = useProductStore();

    const toggleModal = () => {
      showModal.value = !showModal.value;
      console.log(showModal.value);
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
    const applyFilter = (category) => {
      productStore.filterByCategory(category);
      showModal.value = false;
    };

    return {
      productStore,
      getStatusClass,
      capitalizeFirstLetter,
      applyFilter,
      toggleModal,
    };
  },
};
</script>

<style>
@import url("../Asset/Table.css");
</style>
