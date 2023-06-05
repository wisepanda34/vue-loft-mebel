<template>

    <router-link class='card' to="/cardPage" >

      <div class='card__pic'>
        <div class='card__heart'  @click.prevent="handleAddToFavorites(item,true)">
          <img :class="['card__icon', {'yellow':isCardInFavorites(item)}]" src="/images/icons/wishlist-icon.svg" alt="i">
        </div>
        <img class="card__img" :src="item.img" alt="img" />
      </div>
      <div class='card__info'>
        <div class='card__info-title'>{{item.titleCard}}</div>
        <div class='card__info-subtitle'>{{item.kindProduct}}</div>
        <div class='card__info-price'>{{item.price}} &#36;</div>
      </div>
      <div class='card__descr'>
        <p>Size</p>
        <div class='card__descr-size'>
          <div><span>width</span><p>{{item.width}} sm</p></div>&#9587;<div><span>deep</span><p>{{item.deep}} sm</p></div>&#9587;<div><span>height</span><p>{{item.height}} sm</p></div>
        </div>
        <my-button class='card__descr-btn'
           @click.prevent="handleAddToCartAndOpenVoiceModal(item)"
        >Add to cart</my-button>
      </div>

    </router-link>


</template>

<script>
import {mapActions} from "vuex";
import MyButton from "@/components/UI/MyButton.vue";
import BaseModal from "@/components/UI/BaseModal.vue";

export default {
  name: "OneCard",
  components: {BaseModal, MyButton},
  props:{
    item:{
      type: Object,
      default:()=>{}
    }
  },
  methods: {
    ...mapActions({
      addToCart:'cartList/addToCart',
      addToFavorites:'favorites/addToFavorites',
      openVoiceModal: 'modal/openVoiceModal'
    }),
    handleAddToCartAndOpenVoiceModal(card) {
      this.addToCart(card);
      this.openVoiceModal('That product was added to cart!');
    },
    handleAddToFavorites(card, like) {
      const isFavorite = this.isCardInFavorites(card);
      if (isFavorite) {
        this.removeFromFavorites(card);
      } else {
        const newCard = { ...card, like };
        this.addToFavorites(newCard);
      }
    },
    //обращаемся в store/favorites и с помощью some() проверяем наличие этого card в favorites
    isCardInFavorites(card){
      return this.$store.getters['favorites/getFavorites'].some((favorites)=>favorites.id===card.id)
    },
    removeFromFavorites(card) {
      this.$store.dispatch("favorites/removeFromFavorites", card);
    },
  }
}
</script>

<style lang="scss" scoped>
.card{
  position: relative;
  z-index: 10;
  width: 263px;
  height:390px;
  display: flex;
  flex-direction: column;
  color: #414141;
  margin: 0 auto 80px auto;

  &:hover{
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
    &__descr{
      display: block;
    }
  }
  &__pic{
    padding: 30px 0 0 0;
  }
  &__img{
    width: 200px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
  &__heart{
    position: absolute;
    top: 5px;
    right: 6px;
    cursor: pointer;
    width: 15px;
    height: 20px;
  }
  &__icon{
    max-width: 100%;
  }

  &__info{
    padding: 20px 20px 10px 20px;
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;

    &-subtitle{
      font-size: 12px;
      font-weight: 400;
    }
  }
  &__descr{
    text-align: left;
    padding:0 20px 20px 20px;
    font-size: 9px;
    p{
      margin-block-start: 0.4em;
      margin-block-end: 0.4em;
      font-size: 12px;
    }
    span{
      color: #C4C4C4;
    }
    &-size{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-btn{

    }

  }

}
 .yellow {
    fill: yellow;
    stroke: yellow;
    background: yellow;
}
</style>