<template>
  <section class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <ul class="menu__list" >

          <li class="menu__item" v-for="item in menuList" :key="item.title">
            <a class="menu__link">
              <div class='menu__icon'>
                <img :src='item.icon' alt='i' />
              </div>
              <div class="menu__title">{{item.title}}</div>
            </a>
          </li>

        </ul>

        <div class="menu__burger"><span>&#8285;</span></div>
      </div>
    </div>

  </section>
</template>

<script>
import {mapGetters} from "vuex";

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
     margin: 0 20px 0 0;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: center;
    overflow-x: auto;
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
     cursor: pointer;
     transition: all 0.2s ease-in;
    span{
      font-size: 16px;
      line-height: 19px;
      color: #414141;
    }
    &:hover{
     background: #245462;
    }
  }
  &__icon{}
  &__title{
    font-size: 16px;
  }
  &__burger{
    flex: 0 0 62px;
    padding: 15px 30px;
    span{
      cursor: pointer;
      font-size: 20px;
      padding: 0 10px;
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
       gap:7px;
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
  }
}
</style>