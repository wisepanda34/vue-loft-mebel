<template>
<section class='connect'>
  <div class='container'>

    <div class='connect__title'>Connect with us</div>
    <div class='connect__wrapper'>

      <form class='connect__form' @submit="handleSubmit">

        <div class='connect__form_inputs'>

          <div class='connect__form_name'>
            <label for='input_name'>Your name
              <my-input class="connect__form_input" name='input_name'/>
            </label>
          </div>

          <div class='connect__form_phone'>
            <label for='input_phone'>Your phone
              <my-input class="connect__form_input connect__form_input-phone" name='input_phone' type='tel' pattern="[0-9]*"/>
            </label>
          </div>

        </div>


        <div class='connect__form_textarea' >
          <label>Message
            <textarea name="textarea_message" minLength="5" maxLength="100" />
          </label>
        </div>

        <div class='connect__form_buttons'>
          <my-button class='connect__form_attach' type="file" multiple>Attach file</my-button>
          <my-button class='connect__form_submit' type="submit">Send</my-button>
        </div>

      </form>

      <div class='connect__contacts'>

        <ul class='connect__contacts_list'>
          <li class='connect__contacts_item' v-for="(link,i) in linksFooter" :key="i">
            <a :href="link.href" class='connect__contacts_link'>
              <img :src="getImage('images/icons/phone-black.svg')" alt='i' />
              <div>{{link.value}}</div>
            </a>
          </li>
        </ul>

        <div class='connect__contacts_address'>
          Boston, Lincoln avenue, 45 Lincoln center, 2 floor
        </div>

      </div>

    </div>
  </div>
</section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import linksFooter from "@/store/linksFooter";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import getImage from "@/helpers/getImage";

export default {
  name: "Connect",
  components: {MyInput, MyButton},
  computed:{
    linksFooter() {
      return linksFooter
    },
    ...mapGetters({
      linksFooter:'linksFooter/getLinksFooter'
    })
  },
  methods:{
    getImage,
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
.connect{
  // min-height: 400px;
  &__title{
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    padding: 1.5rem 0;
  }
  &__wrapper{
    display: flex;
  }
  &__contacts{
    flex: 0 1 auto;
    padding-left: 100px;

    &_list{
      display: flex;
      column-gap:37px;
      row-gap:23px;
      flex-wrap: wrap;
      padding-left: 0;
    }

    &_link{
      display: flex;
      gap:10px;
    }
    &_address{
      text-align: left;
      margin-top: 25px;
    }
  }
  &__form{
    flex: 0 1 457px;
    display: flex;
    flex-direction: column;

    &_inputs{
      display: flex;
      gap:10px;
    }
    &_input{
      display: block;
      outline: none;
      width: 207px;
      height: 38px;
      border: 1px solid #c4c4c4;
      border-radius: 3px;
    }
    &_name,&_phone,&_textarea{
      label{
        display: block;
        margin-bottom: 0.25rem;
        text-align: start;
        color: #969696;
        font-size: 12px;
        line-height: 14px;
      }
    }
    &_input-phone{
      width: 240px;
    }
    &_textarea{
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
    &_buttons{
      display: flex;
      gap: 20px;
      margin-top: 15px;
    }
    &_attach{
      width: 149px;
      height: 40px;
      background: #FFFFFF;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
      color: #414141;
      &:hover{
        background: lightgray;
      }
    }
    &_submit{
      width: 106px;
      height: 40px;
    }

  }
}

@media (max-width: 992px) {
  .connect{
    &__contacts{
      padding-left: 20px;
    }
  }
}

@media (max-width: 767px) {
  .connect{
    &__wrapper{
      flex-direction: column;
    }
    &__contacts{
      padding: 20px 0;
      &_list{
        justify-content: center;

      }
      &_address{
        text-align: center;
      }
    }
    &__form{
      flex: 1 1 auto;
      width: 100%;
      &_inputs{
        display: block;
        width: 100%;
      }
      &_input{
        width:  100%;
      }
      &_buttons{
        justify-content: center;
      }
      &_attach{
        width: 106px;
      }
    }
  }
}
</style>