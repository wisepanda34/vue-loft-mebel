<template>
  <section class="cardPage">
    <div class="container">
      <h6>Page of the product</h6>
      <h1 class="cardPage__title center">{{currentProduct.titleCard}}</h1>
      <div class="cardPage__wrapper">

        <div class="cardPage__picture">
          <img :src="getImage(currentProduct.img)" :alt="currentProduct.titleCard">
        </div>

        <div class="cardPage__subtitle">
          <p>Name: <span>{{currentProduct.titleCard}}</span></p>
          <p>Kind: <span>{{currentProduct.kindProduct}}</span></p>
          <p>Category: <span>{{currentProduct.category}}</span></p>
          <p>Type: <span>{{currentProduct.typeProduct}}</span></p>
          <p>Price: <span>{{currentProduct.price}}</span>$</p>
        </div>

        <div class="cardPage__descr">
          <h4>Size</h4>
          <div class='cardPage__descr_size'>
            <div><span>width</span><p>{{currentProduct.width}} sm</p></div>&#9587;<div><span>deep</span><p>{{currentProduct.deep}} sm</p></div>&#9587;<div><span>height</span><p>{{currentProduct.height}} sm</p></div>
          </div>
          <p>Amet asperiores dignissimos error explicabo fugit, hic neque optio quisquam, quo ratione rem, sed sunt temporibus ut voluptatum? Adipisci aspernatur dolorem molestias?</p>
          <p>Consectetur adipisicing elit. Alias at facilis iure labore minima natus nesciunt, odit perferendis porro provident quaerat quas repellat sapiente tempora ut velit voluptatem! Accusantium aperiam architecto aspernatur autem consequuntur, cumque cupiditate eligendi ipsam iusto necessitatibus nemo, obcaecati, quaerat quia quibusdam quidem ratione repellendus ut vero.</p>
          <p>Ad in nulla obcaecati possimus quae quibusdam tempore. Aliquid dignissimos dolores eveniet, non perferendis rerum temporibus voluptatem! Aperiam autem, consequuntur cupiditate debitis dolores ducimus ex incidunt laborum nam qui reiciendis totam voluptate.</p>
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
.cardPage{
  padding: 10px 0;

  &__wrapper{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
  }
  &__picture{
    flex:0 1 60%;
    display: flex;
    justify-content: center;
    img{
      width: 90%;
    }
  }
  &__subtitle{
    flex:0 1 40%;
    font-size: 18px;
    padding-left: 20px;
    span{
      font-weight: 700;
    }
    p{
      margin: 7px 0;
    }
  }
  &__descr{
    flex:0 1 100%;
    line-height: 1.5;
    p{
      text-indent: 30px;
    }
    &_size{
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 12px;
      margin-bottom: 20px;
      p{
        text-indent: 0;
      }
      span{
        display: block;
        text-align: center;
      }
    }
  }
}
@media (max-width: 767px) {
  .cardPage{
    h6{
      font-size: 12px;
    }
    &__title{
      font-size: 18px;
    }
    &__wrapper{
      flex-direction: column;
      padding-top: 0;
    }
    &__picture{
      width: 100%;
    }
    &__subtitle{
      font-size: 14px;
    }
    &__descr{
      font-size: 12px;
    }
  }
}
</style>