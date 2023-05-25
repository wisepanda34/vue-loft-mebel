<template>
  <form class='form' @submit="handleSubmit">

    <div class='form__inputs'>
      <div class='form__name'>
        <label for='input_name'>Your name
          <input type='text' name='input_name' />
        </label>
      </div>

      <div class='form__phone'>
        <label for='input_phone'>Your phone
          <input name='input_phone' type='tel' pattern="[0-9]*"/>
        </label>
      </div>

    </div>


    <div class='form__textarea' >
      <label>Message
        <textarea name="textarea_message" minLength="5" maxLength="100" />
      </label>
    </div>

    <div class='form__buttons'>
      <input class='form__buttons-attach' type="file" multiple />
      <input class='form__buttons-submit' type="submit" value="SEND" />
    </div>

  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Forma",
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

  &__name,&__phone,&__textarea{

    label{
      display: block;
      margin-bottom: 0.25rem;
      text-align: start;
      color: #969696;
      font-size: 12px;
      line-height: 14px;
    }
    input{
      display: block;
      outline: none;
      width: 207px;
      height: 38px;
      background: #FCFCFC;
      border: 1px solid #c4c4c4;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
    }
  }
  &__phone{

    input{
      width: 240px;
    }
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
    }
  }
  &__buttons{
    margin-top: 15px;
    &-attach{
      display: inline-block;
      width: 149px;
      height: 40px;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);

    }
    &-submit{
      width: 106px;
      height: 40px;
      background: #245462;
      color: #fff;
      cursor: pointer;
      border: 1px solid #245462;
      transition: all 0.3s ease;
      &:hover{
        background: #1e4b58;
      }
    }
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
    &__name,&__phone{
      input{
        width:  100%;
      }
    }
    &__textarea{
      textarea{
        box-sizing: content-box;
      }
    }
  }
}

</style>