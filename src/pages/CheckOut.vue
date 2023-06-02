<template>
  <div class="checkOut">
    <div class="container">
      <h1>Placing an order</h1>

      <form class="checkOut__form form">

        <div class="checkOut__block">
          <div class="checkOut__block_head">
            <h3 class="checkOut__block_title">1 Your contact details</h3>
            <font-awesome-icon class="checkOut__block_edit" icon="pen-to-square" />
          </div>
          <div class="checkOut__block_client">client</div>

        </div>


        <br><br>
        <div class="checkOut__block">
          <h3 class="checkOut__block-title">2 Delivery</h3>
        </div>

        <div class="checkOut__block">
          <h3 class="checkOut__block-title">3 Payment</h3>
        </div>

        <div class="checkOut__block">
          <h3 class="checkOut__block-title">4 Contact details of the recipient of the order</h3>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import DeliveryOrder from "@/components/DeliveryOrder.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Регистрация иконки доллара в библиотеке
library.add(faPenToSquare);
export default {
  name: "CheckOut",
  components: {DeliveryOrder, FontAwesomeIcon}
}
</script>

<style lang="scss" scoped>
  .checkOut{
    &__wrapper{}
    &__form{}
    &__block{

      &_head{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &_title{}
      &_edit{
        font-size: 20px;
        color: teal;
      }
    }
  }
</style>