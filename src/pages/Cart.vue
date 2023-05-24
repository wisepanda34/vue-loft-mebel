<template>
  <Header/>
<CartList/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CartList from "@/components/CartList.vue";

export default {
  name: "CartPage",
  components: {CartList, Footer, Header},
}
</script>

<style scoped>

</style>