<template>
  <Header/>
  <Menu/>
  <Bonus/>
  <Profile/>
  <Footer/>
</template>

<script>

import Bonus from "@/components/Bonus.vue";
import Profile from "@/components/Profile.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Account",
  components: {Footer, Menu, Header, Profile, Bonus},

}
</script>

<style lang="scss" scoped>

</style>