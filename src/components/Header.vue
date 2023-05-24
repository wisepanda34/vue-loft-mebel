<template>
  <div class="header">
    <div class="container">

      <Navbar/>
      <div class="header__main">
        <div class='header__burger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header__logo">Loft <br> Furniture</div>
        <input type="text" class="header__input">
        <div class="header__icons">
          <a href="#"><img src="@/images/icons/wishlist-icon.svg" alt="i"/></a>
          <router-link to="/cart"><img src="@/images/icons/cart.svg" alt="i"/></router-link >
          <router-link to="/account"><img src="@/images/icons/profile-icon.svg" alt="i"/></router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Header",
  components: {Navbar},
}
</script>

<style lang="scss" scoped>
.header{
  height: 138px;
  padding-bottom: 10px;
  background: lightgray;
  &__main{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__burger{
    display: none;
    flex: 0 0 30px;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 16px;
    cursor: pointer;
    order: 1;

    span{
      background: #000;
      width: 30px;
      height: 1px;
    }
  }
  &__logo{
    flex: 0 1 auto;
    margin-top: 16px;
    font-size: 24px;
    font-weight: 900;
    font-family: 'Playfair Display', serif;
    line-height: 1.05;
    text-transform: uppercase;
    order: 2;
  }
  &__input{
    position: relative;
    flex: 1 1 auto;
    height: 50px;
    margin: 20px 30px 0 30px;
    padding: 0 30px 0 40px;
    outline: none;
    border: 1px solid rgba(230, 230, 230, 1);
    order: 3;

    background-image: url('@/images/icons/search-icon.svg') ;
    background-repeat: no-repeat; /*Убираем повтор изображения*/
    background-position: 14px; /*Позиционируем*/

  }
  &__icons{
    flex: 0 1 auto;
    display: flex;
    gap: 30px;
    margin-top: 20px;
    order:4;
  }
}
@media (max-width:992px){
  .header{
    height: 110px;
    &__main{
      padding: 0;
    }

    &__logo{
      order: 2;
      margin-top: 0;
    }
    &__input{
      order: 3;
      margin: 0 20px 0 20px;
      height: 40px;
    }
    &__icons{
      order: 4;
      margin-top: 0;
    }
  }
}

@media (max-width:767px){
  .header{
    height: 100px;
    &__main{
      flex-wrap: wrap;
      padding: 10px 0 3px 0;
    }
    &__burger{
      display: flex;
      flex: 0 1 auto;
      margin-right: 18px;
      order:1;

    }
    &__logo{
      order: 2;
      flex: 0 1 auto;
      margin: 0 20px 0 0;
      font-size: 18px;
    }
    &__input{
      order: 4;
      flex: 0 1 100%;
      margin: 7px 0 0 0;
    }
    &__icons{
      order: 3;
      flex: 0 1 auto;
      gap: 15px
    }
  }
}
</style>