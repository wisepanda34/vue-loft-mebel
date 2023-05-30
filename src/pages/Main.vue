<template>
  <Menu/>
  <Banner/>
  <Cards/>

</template>

<script>
import Menu from "@/components/Menu.vue";
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Main",
  components: { Cards, Banner, Menu}
}
</script>

<style scoped>

</style>