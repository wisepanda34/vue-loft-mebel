import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Contacts from "@/pages/Contacts.vue";
import Account from "@/pages/Account.vue";
import CartPage from "@/pages/Cart.vue";
import CartProduct from "@/components/CartProduct.vue";
import Catalog from "@/pages/Catalog.vue";
import CardPage from "@/pages/CardPage.vue";
import FavoritesPage from "@/pages/FavoritesPage.vue";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
  path: '/about',
    component: About
},
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/cart',
    component: CartPage
  },
  {
    path: '/cart/:id',
    component: CartProduct
  },
  {
    path: '/catalog',
    component: Catalog
  },
  {
    path: '/cardPage',
    component: CardPage
  },
  {
    path: '/favoritesPage',
    component: FavoritesPage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
