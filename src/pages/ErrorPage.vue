<template>
  <div class="error">
    <div class="container">
      <h1 class="error__title">404</h1>
      <h4 class="error__subtitle">an error occurred or the page does not exist</h4>
      <router-link to="/" class="error__goHome">Go to home page</router-link>
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
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  &__title{
    font-size: 80px;
    margin-bottom: 20px;
    color: #f8748d;
  }
  &__subtitle{
    color: #6e242e;
    margin-bottom: 120px;
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