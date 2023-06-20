<template>
  <div class="error">
    <div class="container">
      <div class="error__wrapper">
        <div class="error__content">
          <h1 class="error__title">404</h1>
          <h4 class="error__subtitle">an error occurred or the page does not exist</h4>
        </div>

        <router-link to="/" class="error__goHome">Go to home page</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ErrorPage",

}
</script>

<style lang="scss" scoped>
.error{

  &__wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 50px 0;
  }
  &__title{
    font-size: 120px;
    margin: 20px 0;
    color: #f8748d;
  }
  &__subtitle{
    color: #6e242e;
  }
  &__goHome{
    color: #4c6062;
    text-decoration: underline;
    &:hover{
      color: #68c0ee;
    }
  }
}
</style>