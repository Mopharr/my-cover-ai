<template>
  <div class="table">
    <div class="orderTop">
      <h2>Product</h2>
      <div class="method">
        <button><IoFilterOutline /> Filters</button>
        <div class="input">
          <IconsSearch class="search" />
          <input placeholder="search" />
        </div>
      </div>
    </div>
    <div class="proDuctTable">
      <!-- <div v-for="product in productStore.products" :key="product?.id">
        {{ product.name }}
      </div> -->

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
import { onMounted } from "vue";

export default {
  setup() {
    const productStore = useProductStore();

    onMounted(async () => {
      await productStore.fetchProduct();
    });

    const getStatusClass = (status) => {
      return status ? "status-true" : "status-false";
    };

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return { productStore, getStatusClass, capitalizeFirstLetter };
  },
};
</script>

<style>
.orderTop {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2em 1em;
}
.orderTop h2 {
  margin: 0;
  color: var(--Grey-900, #101928);
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}
.orderTop p {
  margin: 0;
  color: var(--Gray-600, #475467);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.proDuctTable {
  width: 100%;
  overflow-x: scroll;
  padding: 0 1em;
}

.proDuctTable {
  width: 100%;
}

.proDuctTable::-webkit-scrollbar {
  width: 0px;
}

/* Track */
.proDuctTable::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 0;
}

/* Handle */
.proDuctTable::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 0;
}

/* Handle on hover */
.proDuctTable::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

.proDuctTable table {
  border-spacing: 0;
}

.poHead {
  background: #f0f2f5;
  border-radius: 10px 10px 0 0;
  height: 45px;
}

.poHead th {
  text-align: left;
  color: var(--Grey-700, #344054);
  font-feature-settings: "cv04" on, "cv03" on;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  padding-left: 1em;
  letter-spacing: -0.06px;
  min-width: 160px;
}
.poHead th:nth-child(1) {
  min-width: 300px;
}

.poHead th:last-child {
  min-width: 50px;
  max-width: 50px;
}
.Tbody {
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.Tbody:hover {
  background-color: rgba(52, 64, 84, 0.1);
  transition: all 0.4s ease-in-out;
}
.Tbody td {
  color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.Tbody td:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4em;
}

.tName {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4em;
}
.nIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 200px;
  border: 1.5px solid var(--Shade-White, #fff);
  background: var(--bg, #e7e7e7);
  color: #0e0e0e;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin: 0;
}

.userTName h2 {
  margin: 0;
  color: var(--Grey-900, #101928);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
}
.userTName p {
  overflow: hidden;
  color: var(--Grey-600, #475367);
  font-feature-settings: "cv04" on, "cv03" on;
  text-overflow: ellipsis;
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
}

.Tbody td:nth-child(3) p {
  width: 35px;
  display: flex;
  align-self: center;
  padding: 2px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #0e0e0e;
  text-align: center;
  border-radius: 12px;
  background: var(--bg, #e7e7e7);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
}
.Tbody td:nth-child(5) p {
  width: 35px;
  margin: auto;
  display: flex;
  padding: 2px 25px;
  border-radius: 12px;
}

.Tbody td {
  margin-bottom: 1em;
  padding: 0.5em;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
}
.status-true {
  /* background-color: rgba(0, 128, 0, 0.5); */
      background-color: #ecfdf3;
  color: #45b26b !important;
  width: 35px;
  display: flex;
  align-self: center;
  padding: 2px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  margin: auto;
}
</style>
