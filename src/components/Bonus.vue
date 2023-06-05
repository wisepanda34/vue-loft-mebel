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
          <div class='bonus__cash'><img src='/images/icons/cashback.svg' alt="i" class='bonus__icon' />We return up to 7% to the bonus account</div>
          <div class='bonus__cash'>
<!--            <font-awesome-icon class="currency-icon" icon="dollar-sign" />-->
            1 bonus = 1 dollar</div>
          <div class='bonus__cash'><img src='/images/icons/gift.svg' alt="i" class='bonus__icon' />Pay with bonuses up to 20% of the purchase</div>
        </div>

      </div>
    </div>
  </section >
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Регистрация иконки доллара в библиотеке
// library.add(faDollarSign);
export default {

  name: "Bonus",
  components: {
    // FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.currency-icon {
  height: 18px;
  color: #000;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
}
.bonus{
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  &__headline{
    min-height: 50px;
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
    &__footline{
      flex-direction: column;
      gap: 10px;
      padding: 10px 0 10px 30%;
      align-items: start;
    }
  }
}
@media (max-width: 767px) {
  .bonus{
    &__footline{
      padding: 10px 0 10px 20%;
    }
  }
}
@media (max-width: 576px) {
  .bonus{
    &__headline{
      min-height: 50px;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
    }
    &__footline{
      padding: 10px 0 10px 5%;
    }
  }
}
</style>