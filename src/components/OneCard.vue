<template>
  <router-link class='card' to="/cardPage">
    <div class='card__pic'>
      <div class='card__heart'>&#9825;</div>
      <img :src="item.img" alt="img" />
    </div>
    <div class='card__info'>
      <div class='card__info-title'>{{item.titleCard}}</div>
      <div class='card__info-subtitle'>{{item.category}}</div>
      <div class='card__info-price'>{{item.price}} &#36;</div>
    </div>
    <div class='card__descr'>
      <p>Size</p>
      <div class='card__descr-size'>
        <div><span>width</span><p>{{item.width}} sm</p></div>&#9587;<div><span>deep</span><p>{{item.deep}} sm</p></div>&#9587;<div><span>height</span><p>{{item.height}} sm</p></div>
      </div>
      <button class='card__descr-btn'>Add to cart</button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "OneCard",
  props:{
    item:{
      type: Object,
      default:()=>{}
    }
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
    // position: relative;
    // flex:0 0 70%;
    // background: rgb(247, 105, 44);
    padding: 30px 0 0 0;
    img{
      width: 200px;
      height: 150px;
    }
  }
  &__heart{
    position: absolute;
    top: 2px;
    right: 6px;
    cursor: pointer;
  }
  &__info{
    // flex:0 0 15%;
    padding: 20px 20px 10px 20px;
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    // background: rgb(245, 240, 196);

    &-subtitle{
      font-size: 12px;
      font-weight: 400;
    }
  }
  &__descr{
    // flex:0 0 15%;
    // background: rgb(230, 249, 85);
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
      width: 223px;
      height: 40px;
      background: #245462;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover{
        background: rgb(28, 73, 86);
      }
    }

  }

}
</style>