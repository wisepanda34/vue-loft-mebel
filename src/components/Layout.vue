<template>
 <div class="layout">
   <Header v-if="!isProductPage"/>
   <router-view class="page"/>
   <Footer v-if="!isProductPage"/>
 </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {mapActions} from "vuex";

export default {
  name: "Layout",
  components: {Footer, Header},
  created() {
    //получение данных из localStorage и передача этих данных в store/user.js/userData.
    const storedData = JSON.parse(localStorage.getItem("userDataStorage"));
    if (storedData) {
      this.updateUserData(storedData)
    }
  },
  computed:{
    isProductPage(){
      return this.$route.path.includes('product')
    }
  },
  methods:{
    ...mapActions({
      updateUserData: 'user/updateUserData'
    })
  }

}
</script>

<style lang="scss" scoped>
.layout{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page{
  flex: 1 1 auto;
}

</style>