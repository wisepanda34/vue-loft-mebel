<template>
  <section class='cartlist'>
    <div class='container'>
      <div class='cartlist__wrapper'>

        <div class='cartlist__heading'>
          <div>Your cart</div>
          <div><span>{{this.count}}</span> items</div>
        </div>

        <ul class='cartlist__list' v-for="item in cartList" :key="cartList.id" >
         <li>
           <CartProduct :item="item" />
         </li>
        </ul>

        <div class='cartlist__act'>
          <div class='cartlist__act-total'>
            The total cost: &nbsp;&nbsp;  <span>{{ this.sum }}&nbsp;&#36;</span>
          </div>
          <router-link to="/checkOut" class='cartlist__act-btn btn'>Checkout</router-link>
        </div>

        <h3 style="color: red">Recommendations</h3>

      </div>
    </div>
  </section>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import {mapGetters} from "vuex";
export default {
  name: "CartList",
  components:{ CartProduct},
  data(){
  },
  computed:{
    ...mapGetters({
      cartList: 'cartList/getCartList',
      sum: 'cartList/getTotalSum',
      count: 'cartList/getCountOfProducts'
    })
  }
}
</script>

<style lang="scss" scoped>
.cartlist{
  background: #fff;
  &__wrapper{

  }
  &__heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    font-size: 16px;
    line-height: 1.2;
    color: #414141;
  }
  &__list{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline-start: 0;
  }
  &__act{
    display: flex;
    gap: 25px;
    justify-content: end;
    padding: 20px 0;
    &-btn{
      width: 202px;
      height: 40px;
      background: #245462;
      font-size: 13px;
      line-height: 15px;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        background: #1f4a57;
      }
    }
    &-total{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 1.2;
      color: #414141;
      span{
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}
@media (max-width: 767px) {
  .cartlist{
    &__list{
      gap: 10px;
    }
    &__heading{
      padding: 10px 0;
      font-size: 12px;

    }
    &__act{
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>