<template>
  <div class="navbar header__navbar menuTransform__navbar">

    <nav class="navbar__nav menuTransform__nav">
      <router-link to="/" @click="chooseMenu" :class="{active:isActive('/')}">Main</router-link>
      <router-link to="/about" @click="chooseMenu" :class="{active:isActive('/about')}">About</router-link>
      <router-link to="/catalog" @click="chooseMenu" :class="{active:isActive('/catalog')}">Catalog</router-link>
      <router-link to="/contacts" @click="chooseMenu" :class="{active:isActive('/contacts')}">Contacts</router-link>
      <router-link to="/reviewsPage" @click="chooseMenu" :class="{active:isActive('/reviewsPage')}">Reviews</router-link>

    </nav>

    <div class='navbar__delivery'>
      <a class='navbar__delivery-phone flex' @click="chooseMenu" href='tel: 19648999119'>
        <img :src="getImage('images/icons/phone-black.svg')" alt="i"/>
        <span>+1 (964) 89 99 119</span>
      </a>
      <router-link to="/deliveryPage" @click="chooseMenu" class='navbar__delivery-deliv flex' :class="{active:isActive('/deliveryPage')}">
        <img :src="getImage('images/icons/delivery-icon-black.svg')" alt="i"/>
        <span>Delivery</span>
      </router-link>
    </div>

  </div>
</template>

<script>

import getImage from "@/helpers/getImage";

export default {
  name: "Navbar",
  methods:{
    getImage,
    chooseMenu(){
      this.$emit('close-menuTransform')
    },
    // проверка перехода по роуту, содержащемуся в конкретном route-link
    isActive(route){
      return this.$route.path === route
    },
  }
}
</script>


<style lang="scss" scoped>
.navbar{
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  &__nav{
    display: flex;
    gap: 20px;
  }
  &__delivery{
    display: flex;
    gap: 20px;
  }
}
.active {
  color: #5f909d;
}
@media (max-width: 767px) {
    .navbar{
      justify-content: flex-start;
      align-items: center;
      gap: 30%;
      padding: 20% 0 0 0;

      &__nav{
        flex-direction: column;
        font-size: 20px;
      }
      &__delivery{
        flex-direction: column;
        gap: 20px;
      }
    }
}
.flex{
  gap: 5px;
}

</style>