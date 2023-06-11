<template>
  <div class="menuTransform">
    <div class="menuTransform__menu">
      <Navbar class="menuTransform__navbar" @close-menuTransform="$emit('close-menu')"/>
      <div class="menuTransform__delete" @click="$emit('close-menu')">&#9587;</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "menu-transform",
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
.menuTransform{
  display: none;
}
@media (max-width: 767px){
  .menuTransform{
    display: block;
    transition:  0.5s all ease-in-out;
    transform: translateX(-300%);
    &__menu{
      background: #fff;
      opacity: 1;
      position: relative;
      width: 60%;
      height: 100%;
      z-index: 20;
    }
    &-active{
      transform: translateX(0);
    }
    &__navbar{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__delete{
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 22px;
      cursor: pointer;
    }
  }
}
@media (max-width:575px){
  .menuTransform{
    &__menu{
      width: 100%;
    }
  }
}

</style>