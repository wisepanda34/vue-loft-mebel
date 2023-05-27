<template>
  <div class="navbar header__navbar menuTransform__navbar">

    <nav class="navbar__nav menuTransform__nav">
      <router-link to="/">Main</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </nav>

    <div class='navbar__delivery'>
      <a class='navbar__delivery-phone flex' href='tel: 19648999119'>
        <img src="@/images/icons/phone-black.svg" alt="i"/>
        <span>+1 (964) 89 99 119</span>
      </a>
      <router-link to="/deliveryPage" class='navbar__delivery-deliv flex' >
        <img src="@/images/icons/delivery-icon-black.svg" alt="i"/>
        <span>Delivery</span>
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: "Navbar",
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