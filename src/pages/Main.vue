<template>
  <Header/>
  <Menu/>
  <Banner/>
  <Cards/>
  <Footer/>
  <menu-transform/>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Main",
  components: {Footer, Cards, Banner, Menu, Header}
}
</script>

<style scoped>

</style>