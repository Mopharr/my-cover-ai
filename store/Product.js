import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    allProducts: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProduct() {
      this.isLoading = true;
      this.error = null;
      try {
        const token = "MCASECK|138323a7-3807-4f6e-b043-dd0bb1277bcd";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(
          "https://staging.api.mycover.ai/v1/products/get-all-products",
          config
        );
        this.allProducts = this.products = res.data.data.products;
        console.log("Data:", this.products);
      } catch (error) {
        this.error = error;
        console.error("Error:", error);
      } finally {
        this.isLoading = false;
      }
    },
    filterByCategory(category) {
      if (category === "all") {
        this.products = this.allProducts;
      } else {
        this.products = this.allProducts.filter(
          (p) => p.productCategory.name === category
        );
      }
    },

    async fetchSingleProduct(id) {
      this.isLoading = true;
      this.error = null;
      try {
        const token = "MCASECK|138323a7-3807-4f6e-b043-dd0bb1277bcd";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(
          `https://staging.api.mycover.ai/v1/products/${id}`,
          config
        );
        this.singleProduct =  res.data.data.product;
        console.log("Data:", this.singleProduct);
      } catch (error) {
        this.error = error;
        console.error("Error:", error);
      } finally {
        this.isLoading = false;
      }
    },
    
  },
});
