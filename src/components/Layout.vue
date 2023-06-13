<template>
 <div class="layout">
   <Header/>
   <router-view class="page"/>
   <Footer/>
 </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Layout",
  components: {Footer, Header}
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