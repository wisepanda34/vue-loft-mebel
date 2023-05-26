<template>
  <Header/>
  <FavoritesList/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FavoritesList from "@/components/FavoritesList.vue";

export default {
  name: "FavoritesPage",
  components: {FavoritesList, Footer, Header}
}
</script>

<style scoped>

</style>