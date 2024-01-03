import Vuex from "vuex"
import Vue from  'vue'
import Product from "./Product"

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Product
    }
})
