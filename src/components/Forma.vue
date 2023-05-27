<template>
  <form class='form' @submit="handleSubmit">

    <div class='form__inputs'>
      <div class='form__name'>
        <label for='input_name'>Your name
          <my-input class="form__input" name='input_name'/>
        </label>
      </div>

      <div class='form__phone'>
        <label for='input_phone'>Your phone
          <my-input class="form__input form__input-phone" name='input_phone' type='tel' pattern="[0-9]*"/>
        </label>
      </div>

    </div>


    <div class='form__textarea' >
      <label>Message
        <textarea name="textarea_message" minLength="5" maxLength="100" />
      </label>
    </div>

    <div class='form__buttons'>
      <my-button class='form__attach' type="file" multiple>Attach file</my-button>
      <my-button class='form__submit' type="submit">Send</my-button>
    </div>

  </form>
</template>

<script>
import {mapActions} from "vuex";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "Forma",
  components: {MyButton},
  methods:{
    ...mapActions('clients',['addNewClient']),
    handleSubmit(event){
      event.preventDefault();
      const name=event.target.elements.input_name.value;
      const phone=event.target.elements.input_phone.value;
      const message=event.target.elements.textarea_message.value;
      const newClient={name,phone,message};
      this.addNewClient(newClient);
      event.target.reset();
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  flex: 0 1 457px;
  display: flex;
  flex-direction: column;

  &__inputs{
    display: flex;
    gap:10px;
  }
  &__input{
    display: block;
    outline: none;
    width: 207px;
    height: 38px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
  }
  &__name,&__phone,&__textarea{
    label{
      display: block;
      margin-bottom: 0.25rem;
      text-align: start;
      color: #969696;
      font-size: 12px;
      line-height: 14px;
    }
  }
  &__input-phone{
    width: 240px;
  }
  &__textarea{
    textarea{
      display: block;
      width: 100%;
      height: 142px;
      resize: none;
      outline: none;
      background: #FCFCFC;
      border: 1px solid #c4c4c4;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
  &__buttons{
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
  &__attach{
    width: 149px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    color: #414141;
    &:hover{
      background: lightgray;
    }
  }
  &__submit{
    width: 106px;
    height: 40px;
  }

}
@media (max-width: 767px) {
  .form{
    flex: 1 1 auto;
    width: 100%;
    &__inputs{
      display: block;
      width: 100%;
    }
    &__input{
      width:  100%;
    }
    &__buttons{
      justify-content: center;
    }
    &__attach{
      width: 106px;
    }
  }
}

</style>