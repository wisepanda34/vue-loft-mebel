<template>
  <!--  tabindex="-1"  фокусировка на элементе, для срабатывания esc-->

  <div class="modal"
       v-if="getModalText.length>0"
       ref="modalElement"
       @click.self="closeVoiceModal"
       tabindex="-1"
       @keydown.esc="closeVoiceModal"
  >
    <div class="modal__white">
      <div class="modal__delete">
        <span @click="closeVoiceModal">&#9587;</span>
      </div>
      <div  class="modal__content">{{getModalText}}</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BaseModal",
  emits:['close'],
  computed:{
    ...mapGetters({
      getModalText: 'modal/getModalText'
    })
  },
  watch:{
    getModalText(value){
      //код внутри $nextTick будет выполнен, когда Vue обновит DOM
      this.$nextTick(()=>{
        if(value){
          this.$refs.modalElement.focus();
        }
      })
    }
  },
  methods:{
    ...mapActions({
      closeVoiceModal: 'modal/closeVoiceModal'
    }),
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