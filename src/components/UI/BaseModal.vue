<template>
  <!--  tabindex="-1"  фокусировка на элементе, для срабатывания esc-->
  <div class="modal"
       ref="modalElement"
       @click.self="close"
       tabindex="-1"
       @keydown.esc="close"
  >
    <div class="modal__white">
      <div class="modal__delete">
        <span @click="close">&#9587;</span>
      </div>
      <div class="modal__content">Added into the cart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  emits:['close'],
  mounted() {
    this.$refs.modalElement.focus();
  },
  methods:{
    close(){
      this.$emit('close');
    }
  },


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
    &:focus{
      outline: none;
    }

    &__white{
      display: flex;
      flex-direction: column;
      min-width: 200px;
      min-height: 100px;
      padding:5px 10px;
      background: #FFFFFF;
      box-shadow: 0 1px 9px rgba(0, 0, 0, 0.11);
    }
    &__delete{
      text-align: right;
      span{
        font-size: 10px;
        cursor: pointer;
      }
    }
    &__content{
      flex: 1 1 auto;
      padding: 5px 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
</style>