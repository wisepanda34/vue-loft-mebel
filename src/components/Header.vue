<template>
  <div class="header">
    <div class="container">

      <Navbar class="header__navbar"/>
      <div class="header__main">
        <div class='header__burger' @click="activeMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header__logo">Loft <br> Furniture</div>

        <div class="header__search">
          <my-input class="header__search_input" v-model="searchQuery">
            <img :src="'images/icons/search-icon.svg'" alt="i">
          </my-input>

          <ul class="header__search_list" v-if="searched.length">
            <li class="header__search_item" v-for="item in searched" >
              <router-link class="header__search_link"
                           :to="`/product/${item.id}`"
                           @click="closeSearch"
              >{{item.titleCard}}</router-link>
            </li>
          </ul>
        </div>

        <div class="header__icons">
          <router-link to="/favoritesPage"><img :src="'./images/icons/wishlist-icon.svg'" alt="i"/></router-link>
          <router-link to="/cart"><img :src="'./images/icons/cart.svg'" alt="i"/></router-link >
          <router-link to="/account"><img :src="'./images/icons/profile-icon.svg'" alt="i"/></router-link>
        </div>
      </div>

      <menu-transform class="header__menuTransform" :class="{'menuTransform-active':isMenuActive}" @close-menu="closeMenu"/>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuTransform from "@/components/MenuTransform.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {Navbar,MenuTransform,MyInput},
  data(){
    return{
      isMenuActive: false,
      windowWidth: window.innerWidth,
      searchQuery:'',
    }
  },
  computed: {
    ...mapGetters({
      searchProduct: "products/searchProduct",
      getProduct: "products/getProduct"
    }),
    searched() {
      return this.searchProduct(this.searchQuery)
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    },
    activeMenu() {
      this.isMenuActive = true;
      document.body.classList.add('no-scroll');
    },
    closeMenu() {
      this.isMenuActive = false;
      document.body.classList.remove('no-scroll');
    },
    closeSearch(){
      this.searchQuery=''
    }
  }
}
</script>

<style lang="scss" scoped>

.header{
  padding-bottom: 10px;
  background: lightgray;
  &__main{
    display: flex;
    justify-content: space-between;
  }
  &__burger{
    display: none;
    flex: 0 0 30px;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    width: 100%;
    //height: 16px;
    cursor: pointer;
    order: 1;

    span{
      background: #000;
      //width: 30px;
      height: 1px;
      //margin: 0 auto;
    }
  }
  &__logo{
    flex: 0 1 auto;
    font-size: 24px;
    font-weight: 900;
    font-family: 'Playfair Display', serif;
    line-height: 1.05;
    text-transform: uppercase;
    order: 2;
  }
  &__search{
    position: relative;
    flex: 1 1 auto;
    padding: 0 20px;
    order: 3;
    &_input{
      width: 100%;
      height: 50px;
      padding: 0 30px 0 40px;
      border: 1px solid rgba(230, 230, 230, 1);
      background-color: #fff;
      font-size: 16px;
    }
    &_list{
      position: absolute;
      z-index: 100;
      top: 33px;
      left: 20px;
      width: calc(100% - 40px);
      background: #fff;
      border: 1px solid rgba(230, 230, 230, 1);
    }
    &_item{
      margin: 4px 0;
    }
    &_link{
      &:hover{
        color: #4d91a4;
      }
    }
  }
  &__icons{
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    gap: 30px;
    order:4;
  }
  &__menuTransform{
    display: none;
  }
}
@media (max-width:992px){
  .header{
    &__main{
      padding: 0;
    }
    &__logo{
      order: 2;
      margin-top: 0;
    }
    &__search{
      order: 3;
      margin: 0 20px 0 20px;
    }
    &__icons{
      order: 4;
      margin-top: 0;
    }
  }
}

@media (max-width:767px){
  .header{
    position: relative;
    padding: 10px 0;
    &__main{
      flex-wrap: wrap;
    }
    &__burger{
      display: flex;
      order:1;

    }
    &__logo{
      order: 2;
      flex: 0 1 auto;
      font-size: 18px;
      padding: 0 10px;
    }
    &__search{
      order: 4;
      flex: 0 1 100%;
      margin: 7px 0 0 0;
      padding: 0;

      &_input{
        height: 30px;
      }
      &_list{
        top: 13px;
        left: 0;
        width: 100%;
        font-size: 14px;
      }
    }
    &__icons{
      order: 3;
      flex: 0 1 auto;
      gap: 15px
    }
    &__navbar{
      display: none;
    }
    &__menuTransform{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 15;
    }
  }
}

</style>