<template>
<section class='connect'>
  <div class='container'>

    <div class='connect__title'>Connect with us</div>
    <div class='connect__wrapper'>

      <Forma/>

      <div class='connect__contacts'>

        <ul class='connect__contacts-list'>
          <li>
            <a href="tel:19648999119" class='connect__contacts-link'>
              <img src='/images/icons/phone-black.svg' alt='i' />
              <div>+1 (964) 89 99 119</div>
            </a>
          </li>

           <li>
             <a href='mailto:loft_furniture@gmail.com' class='connect__contacts-link'>
               <img src="/images/icons/mail.svg" alt='i' />
               <div>loft_furniture@gmail.com</div>
             </a>
           </li>

            <li>
              <a href='#' class='connect__contacts-link'>
                <img src="/images/icons/inst.svg" alt='i' />
                <div>INSTAGRAM</div>
              </a>
            </li>

        </ul>

        <div class='connect__contacts-address'>
          Boston, Lincoln avenue, 45 Lincoln center, 2 floor
        </div>


      </div>


    </div>
  </div>
</section>
</template>

<script>
import Forma from "@/components/Forma.vue";

export default {
  name: "Connect",
  components: {Forma}
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

    &-list{
      display: flex;
      column-gap:37px;
      row-gap:23px;
      flex-wrap: wrap;
      padding-left: 0;
    }

    &-link{
      display: flex;
      gap:10px;
    }
    &-address{
      text-align: left;
      margin-top: 25px;
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
    }
  }
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