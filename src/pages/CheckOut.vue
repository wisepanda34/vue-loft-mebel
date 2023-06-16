<template>
  <div class="checkOut">
    <div class="container">
      <div class="checkOut__wrapper">
        <h1 class="checkOut__title center">Placing an orders</h1>

        <form
            @submit.prevent="handleSubmitOrder"
            class='checkOut__form form'
            :class="{
                'disabled_class': loading
              }"
        >
          <div class="checkOut__block">
            <h3 class="checkOut__form_subtitle">1 Your contact details</h3>
            <div class="checkOut__form_grid">
              <div v-for="field in Object.keys(order.userData)" :class='`checkOut__form_grid_${field}`' >
                <label :for='`input_${field}`'>{{ field }}
                  <my-input class="checkOut__form_input input"  :name='`input_${field}`' v-model="order.userData[field]" />
                </label>
              </div>
            </div>
          </div>

          <div class="checkOut__block">
            <h3 class="checkOut__form_subtitle">2 Delivery</h3>
            <div class="checkOut__form_delivery">
              <label v-for="option in optionsDelivery" :key="option.value">
                <input type="radio" :value="option.value" v-model="selectedDelivery" class="checkOut__form_radio"/>
                {{ option.label }}
              </label>
            </div>
          </div>

          <div class="checkOut__block">
            <h3 class="checkOut__form_subtitle">3 Payment</h3>
            <div class="checkOut__form_payment ">
              <label v-for="option in optionsPayment" :key="option.value">
                <input type="radio" :value="option.value" v-model="selectedPayment" class="checkOut__form_radio"/>
                {{ option.label }}
              </label>
            </div>
          </div>
          <my-button
              type="submit"
              class='checkOut__form_btn btn'
              :disabled="loading"
          >Submit order</my-button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DeliveryOrder from "@/components/DeliveryOrder.vue";
import {mapActions, mapGetters} from "vuex";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
// Регистрация иконки доллара в библиотеке
// library.add(faPenToSquare);
export default {
  name: "CheckOut",
  components: {DeliveryOrder, MyButton, MyInput},
  data(){
    return {
      order: {
        userData:{ name: '', surname: '',  email: '', phone:''},
        // deliveryOrder:'',
        // paymentOrder:'',
      },
      customer:{
        name: '',
        surname: '',
        email: '',
        phone: '',
        deliveryOrder: '',
        paymentOrder: '',
      },
      loading: false,
      optionsDelivery: [
        { label: 'pickup', value: 'pickup' },
        { label: 'delivery by our company', value: 'company' },
        { label: 'delivery by FedEX', value: 'FedEX' }
      ],
      selectedDelivery: '',
      optionsPayment:[
        { label: 'bank transfer', value: 'bank transfer' },
        { label: 'cash payment', value: 'cash payment' },
        { label: 'credit', value: 'credit' },
        { label: 'leasing', value: 'leasing' },
      ],
      selectedPayment:'',
    }
  },
  computed:{
    ...mapGetters({
      getUserData:'user/getUserData',
      getTotalSum:'cartList/getTotalSum'
    })
  },
  mounted() {
    const getUserDataKeys = Object.keys(this.getUserData)//name
    const thisUserDataKeys = Object.keys(this.order.userData)

    getUserDataKeys.forEach(key=>{
      if(thisUserDataKeys.includes(key)){
        const userValue = this.getUserData[key]    //Guest
        // ниже логика для вывода тех полей в форме, которые указаны в userData()
        if(userValue){
          this.order.userData[key]=userValue
        }
      }
    })
  },
  methods: {
    ...mapActions({
      addNewOrder: 'orders/addNewOrder',
      openVoiceModal:'modal/openVoiceModal',
      clearCartList: 'cartList/clearCartList'
    }),
    //это логика для исключения повторной генерации события handleSubmit
    // в момент отправления данных из формы в хранилище

    async handleSubmitOrder() {
        if (this.loading) return
        this.loading = true
        // const customer = {
        //   name: this.order.userData.name,
        //   surname: this.order.userData.surname,
        //   email: this.order.userData.email,
        //   phone: this.order.userData.phone,
        //   deliveryOrder: this.selectedDelivery,
        //   paymentOrder: this.selectedPayment,
        // };
        try {
          // this.order.deliveryOrder=this.selectedDelivery
          // this.order.paymentOrder=this.selectedPayment

          await this.addNewOrder(this.customer)
          // console.log('order>>', customer)

          await this.clearCartList()

          this.selectedDelivery = "";
          this.selectedPayment = "";

          await this.openVoiceModal('your order has been placed and sent for processing, we will contact you');

          this.$router.go(-1);
        } catch (e) {
        } finally {
          this.loading = false

        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkOut{
    &__wrapper{
      display: flex;
      flex-direction: column;
      padding: 3% 0;
    }
    &__form{

      &__subtitle{
        margin: 30px 0 20px 0;
      }
      &_grid{
        padding: 20px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      &_input{
        width: 100%;
        height: 38px;
        color: #686868;
      }
      &_delivery, &_payment{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 0 20px;
      }
      &_btn{
        width: 150px;
        height: 50px;
        margin: 30px auto;
      }
    }
  }
  @media (max-width: 576px) {
    .checkOut{
      &__title{
        font-size: 20px;
      }
      &__form{
        &_subtitle{
          font-size: 16px;
        }
        &_grid{
          grid-template-columns: 1fr;
          gap: 10px;
        }
      }
    }
  }
</style>