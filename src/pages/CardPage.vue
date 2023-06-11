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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum eaque earum, iure labore laudantium magni, necessitatibus, nemo neque officiis omnis pariatur praesentium quas quo temporibus veniam vitae! Aperiam dolorum esse nostrum officia omnis quia vel vero. Aliquam aspernatur iusto laboriosam, minus nemo nobis porro temporibus! Adipisci assumenda consectetur cupiditate, dicta dolor eos labore molestiae natus necessitatibus nisi, odio optio possimus quasi qui quo repellat saepe sed velit! Consequatur ex fuga omnis quasi quia quod saepe velit voluptate. A aspernatur at atque consectetur delectus dignissimos eligendi, enim facere illum impedit minus mollitia nostrum officia officiis perferendis praesentium provident tenetur vitae.</p>
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