<template>
  <router-view/>
  <BaseModal/>
</template>

<script>
import BaseModal from "@/components/UI/BaseModal.vue";


  export default {
    components: { BaseModal},

    mounted() {
      this.$store.dispatch('showCtx')
    }
  }
</script>

<style>

</style>
