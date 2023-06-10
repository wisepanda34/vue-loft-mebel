<template>

  <h1>Page of the card</h1>
  {{currentProduct.titleCard}}
  <img :src="getImage(currentProduct.img)" :alt="currentProduct.titleCard">
<!--  todo-->

</template>

<script>

import {mapGetters} from "vuex";
import getImage from "@/helpers/getImage";

export default {
  name: "CardPage",
  components: {},
  computed: {
    ...mapGetters({
      getProduct: 'products/getProduct'
    }),
    currentProduct() {
      return this.getProduct(this.$route.params.id) || {}
    }
  },
  methods: {
    getImage: getImage
  },
  mounted() {
    console.log(getImage(this.currentProduct.img))
  }
}
</script>

<style lang="scss" scoped>

</style>