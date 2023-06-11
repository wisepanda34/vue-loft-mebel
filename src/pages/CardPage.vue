<template>
  <section class="cardPage">
    <div class="container">
      <h1 class="cardPage__title center">Page of the card {{currentProduct.titleCard}}</h1>
      <div class="cardPage__wrapper">

        <div class="cardPage__img">
          <img :src="getImage(currentProduct.img)" :alt="currentProduct.titleCard">
        </div>

        <div class="cardPage__head">
          <p>titleCard: {{currentProduct.titleCard}}</p>
          <p>kindProduct: {{currentProduct.kindProduct}}</p>
          <p>category: {{currentProduct.category}}</p>
          <p>typeProduct: {{currentProduct.typeProduct}}</p>
          <p>price: {{currentProduct.price}}</p>
        </div>

        <div class="cardPage__descr">
          <p>Size</p>
          <div class='card__descr-size'>
<!--            <div><span>width</span><p>{{item.width}} sm</p></div>&#9587;<div><span>deep</span><p>{{item.deep}} sm</p></div>&#9587;<div><span>height</span><p>{{item.height}} sm</p></div>-->
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores dignissimos error explicabo fugit, hic neque optio quisquam, quo ratione rem, sed sunt temporibus ut voluptatum? Adipisci aspernatur dolorem molestias?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at facilis iure labore minima natus nesciunt, odit perferendis porro provident quaerat quas repellat sapiente tempora ut velit voluptatem! Accusantium aperiam architecto aspernatur autem consequuntur, cumque cupiditate eligendi ipsam iusto necessitatibus nemo, obcaecati, quaerat quia quibusdam quidem ratione repellendus ut vero.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in nulla obcaecati possimus quae quibusdam tempore. Aliquid dignissimos dolores eveniet, non perferendis rerum temporibus voluptatem! Aperiam autem, consequuntur cupiditate debitis dolores ducimus ex incidunt laborum nam qui reiciendis totam voluptate.</p>
        </div>



      </div>
    </div>
  </section>





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