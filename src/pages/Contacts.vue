<template>
  <Header/>
  <Menu/>
  <Connect/>
  <MapComponent/>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";
import Connect from "@/components/Connect.vue";
import MapComponent from "@/components/MapComponent.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Contacts",
  components: {Header, Footer, MapComponent, Connect, Menu}
}
</script>

<style scoped>

</style>