<template>
  <router-link class='favoriteCard' to="/cardPage" >
    <div class='favoriteCard__pic'>
<!--      <div :class="['card__heart', {'yellow':isCardInFavorites(item)}]"  @click.prevent="handleAddToFavorites(item,true)">&#9825;</div>-->
      <img :src="item.img" alt="img" />
    </div>
    <div class='favoriteCard__info'>
      <div class='card__info-title'>{{item.titleCard}}</div>
      <div class='card__info-subtitle'>{{item.category}}</div>
      <div class='card__info-price'>{{item.price}} &#36;</div>
    </div>
    <div class='favoriteCard__descr'>
      <p>Size</p>
      <div class='favoriteCard__descr-size'>
        <div><span>width</span><p>{{item.width}} sm</p></div>&#9587;<div><span>deep</span><p>{{item.deep}} sm</p></div>&#9587;<div><span>height</span><p>{{item.height}} sm</p></div>
      </div>

    </div>
  </router-link>
</template>

<script>

export default {
  name: "favoriteCard",
  props:{
    item:{
      type: Object,
      default:()=>{}
    },

  }
}
</script>

<style lang="scss" scoped>
.favoriteCard{
  position: relative;
  z-index: 10;
  width: 263px;
  min-height:340px;
  display: flex;
  flex-direction: column;
  color: #414141;
  margin: 0 auto 20px auto;

  &:hover{
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
    &__descr{
      display: block;
    }
  }
  &__pic{
    padding: 30px 0 0 0;
    img{
      width: 200px;
      height: 150px;
      display: block;
      margin: 0 auto;
    }
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
  }
}
</style>