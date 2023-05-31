<template>
  <div class="appPage">
    <Header/>
    <router-view />
    <Footer/>
  </div>

  <BaseModal v-if="isVoiceModalOpen" @close="isVoiceModalOpen=false"/>
</template>

<script>
import BaseModal from "@/components/UI/BaseModal.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

  export default {
    components: {Footer, Header, BaseModal},
    data(){
      return{
        isVoiceModalOpen: true,
      }
    },
    mounted() {
      this.$store.dispatch('showCtx')
    }
  }
</script>

<style lang="scss">
.appPage{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  router-view{
    flex: 1 1 auto;
  }
}

</style>
