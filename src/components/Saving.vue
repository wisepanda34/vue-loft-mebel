<template>
  <section class='saving'>
    <div class='container'>
      <h4 class='saving__title center'>We can help you save time, effort and money!</h4>

      <div class='saving__wrapper'>

        <div class='saving__item' v-for="item in savingDB" :key='item.subtitle'>
          <h6>{{ item.subtitle }}</h6>
          <p>{{ item.descr }}</p>
        </div>

      </div>

      <h4 class='saving__title center'>
        Why don't we save?<br />
        At your comfort and furniture quality!
      </h4>
    </div>

  </section>
</template>

<script>

import {mapGetters} from "vuex";
import savings from "@/store/savings";

export default {
  name: "Saving",
  components:{},
  data(){
    return{}
  },
  computed:{
    ...mapGetters({
      savings: 'savings/getSaving'
    })
  }

}
</script>

<style lang="scss" scoped>
.saving{
  padding-bottom: 70px;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
  }
  &__title{
    font-size: 24px;
    margin: 60px 0;
  }
  &__item{
    position: relative;
    width: 260px;
    text-align: left;
    margin-bottom: 40px;
    &::before{
      content: url('@/images/icons/check_around.svg');
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      left: -30px;
    }
    h6{
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #414141;
    }
    p{
      font-size: 14px;
      line-height: 140%;
      color: #414141;
    }
  }
}

@media (max-width:992px){
  .saving{

    &__wrapper{
      flex-direction: column;
      // padding-left: 0;

    }
    &__title{
      margin: 30px 0;
    }
    &__item{
      width: 280px;
      margin: 0 auto 30px auto;
    }
  }
}
@media (max-width:767px){
  .saving{
    padding-bottom: 50px;
    &__title{
      font-size: 18px;
    }
    &__item{
      font-size: 12px;
    }
  }
}
@media (max-width:425px){
  .saving{

    &__item{
      width: 250px;
    }
  }
}

</style>