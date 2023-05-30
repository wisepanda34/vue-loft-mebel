<template>
  <footer  class='footer'>
    <div class='container'>
      <div class='footer__wrapper'>


        <div class='footer__navigation'>
          <h4 class='footer__navigation-title'>Navigation</h4>
          <div class="footer__navigation-container">
            <ul class='footer__navigation-list' v-for="item in menuList" :key="item.title">
              <li >
                <router-link class='footer__navigation-item' to="/cardPage">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
<!--          <ul class='footer__navigation-bottom-list'>-->
<!--            <li class='footer__navigation-bottom-item'>Sale</li>-->
<!--            <li class='footer__navigation-bottom-item'>New</li>-->
<!--          </ul>-->
        </div>

        <div class='footer__address'>
          <div class='footer__address-block'>
            <div class='footer__address-logo'>LF</div>
            <div class='footer__address-addr'>
              Boston, Lincoln avenue, 45 <br />Lincoln center, 2 floor
            </div>
          </div>
          <ul class='footer__address-list'>
            <li >
              <a href='tel:19648999119' class='footer__address-link'>
                <img src='@/images/icons/phone-black.svg' alt='i' />
                <div>+1 (964) 89 99 119</div>
              </a>
            </li>
            <li >
              <a href='#' class='footer__address-link'>
                <img src='@/images/icons/inst.svg' alt='i' />
                <div>INSTAGRAM</div>
              </a>
            </li>
            <li >
              <a href='mailto:loft_furniture@gmail.com' class='footer__address-link'>
                <img src='@/images/icons/mail.svg' alt='i' />
                <div>loft_furniture@gmail.com</div>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Footer",
  components:{},
  data() {
    return {}
  },
  computed:{
    ...mapGetters({
      menuList:'menuList/getMenuList'
    })
  }
}
</script>

<style lang="scss" scoped>
.footer{
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);
  background:#ffffff;
  &__wrapper{
    display: flex;
    justify-content: space-between;
    padding:25px 0 15px 0;
    font-size: 14px;
    line-height: 1.27;
    color: #414141;
  }

  &__navigation{
    max-width: 45vw;
    &-title{
      font-weight: 500;
      font-size: 14px;
      line-height: 1.27;
      color: #000;
      padding: 0;
      margin: 0 0 20px 0;
      text-align: left;
    }
    &-container{

      display: flex;
      flex-wrap: wrap;
    }
    &-list{
      display: flex;
      flex-basis: 33.33%;
      padding-left: 0;
    }
    &-item{
      display: inline-block;
      width: 100%;
      font-size: 14px;
      line-height: 1.27;
      color: #414141;
      &:hover{
        color: #3dadcc;
        text-decoration: underline;
      }


    }
    &-bottom-list{
      display: flex;
      gap: 30px;
      padding-inline-start: 0;
    }
    &-bottom-item{
      font-size: 14px;
      line-height: 1.27;
      color: #414141;
    }
  }

  &__address{
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-block{
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: right;
    }
    &-logo{
      font-family: 'Playfair Display', sans-serif;
      color: #000;
      font-size: 30px;
      font-weight: 900;
    }
    &-list{
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
    &-link{
      display: flex;
      gap: 10px;
      img{
        height: 17px;
      }
    }
  }
}
@media(max-width: 992px){
  .footer{
    &__address{
      &-list{
        flex-direction: column;
      }
    }
    &__navigation{
      max-width: 70vw;
    }
  }
}
@media(max-width: 767px){
  .footer{
    &__wrapper{
      padding: 14px 0;
    }
    &__navigation{
      display: none;
    }
    &__address{
      width: 100%;
      &-block{
        flex-direction: row;
        justify-content: space-between;
      }
      &-logo{
        font-size: 35px;
      }
      &-addr{
        font-size: 10px;
        align-self: center;
      }
      &-list{
        flex-direction: row;
        justify-content: space-around;
        padding-inline-start: 0;
        font-size: 10px;
        gap:15px;

      }
      &-link{

        gap:5px;
        img{
          height: 12px;
        }
      }
    }

  }
}
@media(max-width: 425px){
  .footer{
    &__address{
      &-list{
        flex-direction: column;
        padding-left: 30%;
      }

    }
  }
}
</style>