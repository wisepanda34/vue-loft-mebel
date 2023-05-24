<template>
  <section class='bonus'>
    <div class='container'>
      <div class='bonus__wrapper'>

        <div class='bonus__headline'>
          <h5>Bonus program</h5>
          <div class='bonus__headline-info'>
            <div>You have <span>0</span> bonus points</div>
            <router-link to='/' class='bonus__headline-rules'>Bonus program rules</router-link>
          </div>
        </div>

        <div class='bonus__footline'>
          <div class='bonus__cash'><img src='@/images/icons/cashback.svg' alt="i" class='bonus__icon' />We return up to 7% to the bonus account</div>
          <div class='bonus__cash'>
            <!--            <dollar-sign-icon size="1.5x" class='bonus__icon'></dollar-sign-icon>-->
            1 bonus = 1 dollar</div>
          <div class='bonus__cash'><img src='@/images/icons/gift.svg' alt="i" class='bonus__icon' />Pay with bonuses up to 20% of the purchase</div>
        </div>

      </div>
    </div>
  </section >
</template>

<script>
import { DollarSignIcon } from 'vue-feather-icons'
export default {
  name: "Bonus",
  components: {
    DollarSignIcon
  }
}
</script>

<style lang="scss" scoped>
.bonus{
  min-height: 106px;
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  &__headline{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: start;

    h5{
      font-size: 16px;
      line-height: 19px;
      color: #414141;
    }
    &-info{
      font-size: 12px;
      line-height: 14px;
      color: #414141;

    }
    div{
      display: inline-block;
      margin-right: 20px;
      margin-top: 5px;

    }
    span{
      color: #245462;
    }
    &-rules{

      &:hover{
        color: #4bbbdd;
      }
    }
  }
  &__footline{
    min-height: 57px;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    background: #F8F8F8;
  }
  &__cash{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 130%;
    color: #414141;
    text-align: left;
  }
  &__icon{
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 992px) {
  .bonus{

    &__wrapper{

    }
    &__headline{

    }
    &__footline{
      flex-direction: column;
      gap: 10px;
      padding: 10px 0 10px 30%;
      align-items: start;
    }
    &__icon{

    }
  }
}
@media (max-width: 767px) {
  .bonus{

    &__wrapper{

    }
    &__headline{

    }
    &__footline{
      padding: 10px 0 10px 20%;
    }
    &__icon{

    }
  }
}
@media (max-width: 576px) {
  .bonus{

    &__wrapper{

    }
    &__headline{
      min-height: 50px;
      flex-direction: column;
      padding-bottom: 20px;
    }
    &__footline{
      padding: 10px 0 10px 0;
    }
    &__icon{

    }
  }
}
</style>