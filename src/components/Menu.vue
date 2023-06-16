<template>
  <section class="menu">
    <div class="container">
      <div class="menu__wrapper">

        <ul class="menu__list" >
          <li class="menu__item" v-for="item in menuList" :key="item.title">
            <a class="menu__link" href="#">
              <div class='menu__icon flex-center'>
                <img :src='getImage(item.icon)' alt='i' />
              </div>
              <div class="menu__title flex-center">{{item.title}}</div>
            </a>
          </li>
        </ul>

        <div class="menu__points"><span @click="openDropdownMenu">&#8285;</span></div>

        <div v-if="isDropdownOpen"
             class="menu__dropdown"
             ref="dropdownMenu"
             tabindex="-1"
             @keydown.esc="closeDropdownMenu"
             @click.self="closeDropdownMenu"
        >
          <ul class="menu__dropdown_list">
            <div class="menu__dropdown_close" @click="closeDropdownMenu">close</div>
            <li class="menu__dropdown_item" v-for="item in menuList" :key="item.title">
              <a class="menu__dropdown_link" href="#">
                <div class='menu__dropdown_icon flex-center'>
                  <img :src='getImage(item.icon)' alt='i' />
                </div>
                <div class="menu__dropdown_title center">{{item.title}}</div>
              </a>
            </li>
          </ul>
        </div>

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
    return {
      isDropdownOpen: false,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    // window.addEventListener("click", this.handleOutsideClick);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
    // window.removeEventListener("click", this.handleOutsideClick);
  },
  computed:{
    ...mapGetters({
      menuList:'menuList/getMenuList'
    })
  },
  watch:{
    isDropdownOpen(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.dropdownMenu.focus();
        });
      }
    },
  },
  methods:{
    getImage,
    handleWindowResize() {
      this.windowWidth = window.innerWidth;

    },
    // handleOutsideClick(event){
    //   const dropdownMenuContainer = this.$refs.dropdownMenu
    //   if(!dropdownMenuContainer) return
    //   if(!dropdownMenuContainer.contains(event.target)){
    //     this.closeDropdownMenu()
    //   }
    // },
    openDropdownMenu(){
      this.isDropdownOpen = true
      document.body.classList.add('no-scroll');
    },
    closeDropdownMenu(){
      this.isDropdownOpen = false
      document.body.classList.remove('no-scroll');
    }
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
    position: relative;
  }
  &__dropdown{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 80vh;
    background: #fff;
    border: 1px solid rgba(230, 230, 230, 1);
    z-index: 50;
    padding: 20px;
    outline: none;
    &_close{
      position: absolute;
      top: 10px;
      right: 10px;
      width: auto;
      text-decoration: underline;
      cursor: pointer;
      color: #4c6062;
      &:hover{
        color: #68c0ee;
      }
    }
    &_list{
      display: flex;
      justify-content: start;
      column-gap: 20px;
      row-gap: 40px;
      flex-wrap: wrap;
      padding-left: 0;
    }
    &_item{
      width: 150px;

    }
    &_link{
      padding: 10px 0;
      &:hover{
        background: #94bcc0;
        box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
      }
    }
    &_icon{
      img{
        width: 30px;
        height: 30px;
      }
    }
    &_title{
      font-size: 20px;
    }
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
    margin: 5px 0 10px;
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
      height: 70px;
      margin-bottom: 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background: #dfe4e5;
        box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
      }
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

  }
  &__icon{

    img{
      min-height: 25px;
      min-width: 25px;
    }
  }
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
      padding: 10px 20px;
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