<template>
  <Header/>
  <Performance/>
  <Profit/>
  <Advantage/>
  <Service/>
  <Saving/>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Performance from "@/components/Performance.vue";
import Profit from "@/components/Profit.vue";
import Advantage from "@/components/Advantage.vue";
import Service from "@/components/Service.vue";
import Saving from "@/components/Saving.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "About",
  components: {Header, Footer, Saving, Service, Advantage, Profit, Performance}
}
</script>

<style scoped>

</style>