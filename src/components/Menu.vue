<template>
  <section class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <ul class="menu__list" >

          <li class="menu__item" v-for="item in menuList" :key="item.title">
            <a class="menu__link">
              <div class='menu__icon'>
                <img :src='getImage(item.icon)' alt='i' />
              </div>
              <div class="menu__title">{{item.title}}</div>
            </a>
          </li>

        </ul>

        <div class="menu__points"><span>&#8285;</span></div>
      </div>
    </div>

  </section>
</template>

<script>
import {mapGetters} from "vuex";
import getImage from "@/helpers/getImage";

export default {
  name: "Menu",
  components:{},
  data() {
    return {}
  },
  computed:{
    ...mapGetters({
      menuList:'menuList/getMenuList'
    })
  },
  methods:{
    getImage
  }
}
</script>

<style lang="scss" scoped>
.menu{
  padding: 10px 0;

  &__wrapper{
     display: flex;
     justify-content: space-between;
     background: #FFFFFF;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);

  }
  &__list{
    min-height: 85px;
    flex: 0 1 auto;
    display: flex;
    gap:50px;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #245462 lightgray;
    padding:0 10px;
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
  &__item{
     display: inline-flex;
     justify-content: center;
     align-items: center;

  }
  &__link{
     display: flex;
     gap: 10px;
     padding: 14px 10px 10px 10px;
    border-radius: 2px;

     cursor: pointer;
     transition: all 0.2s ease-in;
    span{
      font-size: 16px;
      line-height: 19px;
      color: #414141;
    }
    &:hover{
     background: #94bcc0;
      box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
    }
  }
  &__icon{}
  &__title{
    font-size: 16px;
  }
  &__points{
    flex: 0 0 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      cursor: pointer;
      font-size: 20px;
    }
  }
}
@media (max-width:992px){
  .menu{
    &__list{
       gap:35px;
    }
  }
}
@media (max-width:767px){
  .menu{
    &__list{
      gap: 12px;
      justify-content: space-between;
      align-items: baseline;
    }
    &__link{
       flex-direction: column;
       padding: 14px 1px;
    }
    &__icon{
       width: 50px;
       height: 50px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
       display: flex;
       justify-content: center;
       align-items: center;
    }
    &__title{
      font-size: 9px;
      text-align: center;
    }
    &__points{
      display: none;
    }
  }
}
</style>