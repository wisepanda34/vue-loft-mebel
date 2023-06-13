<template>
  <Layout/>
  <BaseModal/>
</template>

<script>
import BaseModal from "@/components/UI/BaseModal.vue";
import storageMixin from "@/mixins/storageMixin";
import Layout from "@/components/Layout.vue";


  export default {
    components: {Layout, BaseModal},
    mixins: [storageMixin],
    data() {
      return {
        userData: null,
      };
    },
    created() {
      this.userData = this.getStorage();
    },

    mounted() {
      this.$store.dispatch('showCtx');
    },
  }
</script>

<style lang="scss">


</style>
