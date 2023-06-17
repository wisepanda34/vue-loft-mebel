<template>
  <section class='cartlist'>
    <div class='container'>
      <div class='cartlist__wrapper'>

        <div class='cartlist__heading'>
            <h4>Your cart</h4>
            <h4 v-if="this.cartList.length>0"><span>{{this.totalElements}}</span> items</h4>
        </div>

        <ul class='cartlist__list' v-for="item in cartList" :key="cartList.id" >
           <li>
             <CartProduct :item="item" />
           </li>
        </ul>

        <div v-if="this.cartList.length<1" class="cartlist__empty">Cart is an empty</div>

        <div v-if="this.cartList.length>0" class='cartlist__act'>
            <div class='cartlist__act-total'>
              The total cost: &nbsp;&nbsp;  <span>{{ this.totalCost }}&nbsp;&#36;</span>
            </div>
            <div>
              <router-link to="/checkOut" class='cartlist__act-btn btn'>Checkout</router-link>
            </div>
        </div>

        <h4 class="">You may like</h4>
        <div class="cartlist__recommendation">
          <OneCard class="no-margin-bottom"  v-for="item in recommendList" :key="item.id" :item="item"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import {mapActions, mapGetters} from "vuex";
import OneCard from "@/components/OneCard.vue";
import cartList from "@/store/cartList";
export default {
  name: "CartList",
  components:{OneCard, CartProduct},
  data(){
    return{
      isBtnShow:false,
      isCartEmpty: true
    }
  },
  computed:{
    ...mapGetters({
      cartList: 'cartList/getCartList',
      recommendList: 'products/getProducts',
      totalCost: 'cartList/getTotalSum',
      //количество всех элементов в карзине
      totalElements: 'cartList/getTotalElements',
      //количество позиций товаров
    })
  },
  watch: {

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
    //padding: 30px 0 50px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
  &__empty{
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    padding: 100px 0 120px;
    color: #718b8f;
  }
  &__recommendation{
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
    margin: 0 ;
    scrollbar-width: thin;
    scrollbar-color: #245462 lightgray;
    padding:0 20px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: lightgray;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #8ba0a2;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #94bcc0;
    }
  }
}
.no-margin-bottom{
  margin-bottom: 10px;
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