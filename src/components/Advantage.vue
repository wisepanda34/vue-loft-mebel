<template>
  <section class='advantage'>
    <div class='container'>
      <div class='advantage__wrapper'>

        <div class='advantage__item' v-for="item in advantages" :key="item.title">
          <h5>{{ item.title }}</h5>
          <hr />
          <p>{{ item.descr }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Advantage",
  components:{},
  data(){
    return{}
  },
  computed:{
    ...mapGetters({
      advantages: 'advantages/getAdvantages'
    })
  }
}
</script>

<style lang="scss" scoped>
.advantage{
  background: #D7E8ED;
  &__wrapper{
    margin: 0 auto;
    padding: 20px 0;
    max-width: 554px;
  }
  &__item{

    padding: 20px 0;
    h5{
      font-size: 18px;
      line-height: 1.2;
      text-align: center;
      letter-spacing: 0.015em;
      color: #414141;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    hr{
      width: 50px;
      height: 1px;
      background: #245462;
    }
    p{
      font-size: 14px;
      line-height: 1.4;
      text-align: center;
      color: #686868;
    }
  }
}
@media (max-width: 767px) {
  .advantage{
    &__wrapper{
      margin: 0 auto;
      padding: 20px 0;
      max-width: 554px;
    }
    &__item{
      padding: 5px 0;
      h5{
        font-size: 14px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>