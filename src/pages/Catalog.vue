<template>
  <Header/>
  <Choose/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Choose from "@/components/Choose.vue";

export default {
  name: "Catalog",
  components: {Choose, Footer, Header}
}
</script>

<style lang="scss" scoped>

</style>