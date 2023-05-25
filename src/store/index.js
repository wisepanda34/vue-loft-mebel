import { createStore } from 'vuex'
import products from "@/store/products";
import profits from "@/store/profits";
import advantages from "@/store/advantages";
import services from "@/store/services";
import savings from "@/store/savings";
import menuList from "@/store/menuList";
import cartList from "@/store/cartList";
import user from "@/store/user";
import clients from "@/store/clients";
import favorites from "@/store/favorites";

export default createStore({
  state() {
    return {
      count:0
    }
  },
  getters: {
  },
  actions: {
    showCtx(ctx) {
      console.log(ctx)
    }
  },
  mutations: {
  },
  modules: {
    products,
    profits,
    advantages,
    services,
    savings,
    menuList,
    cartList,
    user,
    clients,
    favorites
  }
})
