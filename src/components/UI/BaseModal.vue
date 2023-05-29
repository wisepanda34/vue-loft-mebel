<template>
  <div class="modal">
    <div class="modal__white">
      <div class="modal__delete">
        <span>&#9587;</span>
      </div>
      <div class="modal__content">That product has added into the cart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",

}
</script>

<style lang="scss" scoped>
  .modal{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    &__white{
      width: 250px;
      height: 200px;
      padding: 10px;
      background: #FFFFFF;
      box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
    }
    &__delete{
      text-align: right;
    }
    &__content{
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
</style>