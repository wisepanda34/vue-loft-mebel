<template>
  <section class='banner'>
    <div class='container'>
      <div class='banner__wrapper'>

        <div class='banner__content'>
          <h1>LOFT FURNITURE</h1>
          <p>Modern and useful furniture in Boston</p>
          <router-link class='banner__content-btn' to='/catalog'>WATCH CATALOG</router-link>
        </div>

        <swiper
          class='banner__slider'
          :modules="modules"
          :slides-per-view="1"
          navigation
          loop
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          effect="fade"
        >

          <swiper-slide >
            <div class='banner__slide'>
              <img src='/images/img/banner1.jpg' alt='img' />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class='banner__slide'>
              <img src='/images/img/slider.jpg' alt='img' />
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
export default {
  name: "Banner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, EffectFade],
    };
  },

}
</script>

<style lang="scss" scoped>

.banner{
  &__wrapper{
    position: relative;
  }
  &__content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 70px;
    width: 300px;
    text-align: left;
    z-index: 5;
    h1{
      font-family: 'Playfair Display',  sans-serif;
      font-size: 40px;
      font-weight: 900;
      color: #3C3C3C;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    p{
      font-size: 16px;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      color: #343434;
    }
    &-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 163px;
      height: 45px;
      background: #fff;
      color: #414141;
      transition: all 0.3s ease;
      &:hover{
        background: rgb(199, 199, 199);
      }
    }
  }
  &__slider{
    width: 100%;
    height: 100%;
  }
  &__slide{
    width: 100%;
    height: 430px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.swiper-button-next,
.swiper-button-prev {
  width: 30px !important;
  height: 30px !important;
  background: #fff;
  color: gray !important;

  &::after {
    transform: scale(0.3);
  }
}
@media(max-width:992px){
  .banner{
    &__slide{
      height: 330px;
  }
}
@media(max-width:767px){
  .banner{
    &__content{
      display: none;
    }
    &__slide{
      height: 230px;
    }
  }
}
  .swiper-button-next,
  .swiper-button-prev{
    z-index: 0 !important;
  }
}
@media(max-width:575px){
  .banner{
    &__slide{
      height: 170px;
    }
  }
}
@media(max-width:425px){
  .banner{
    &__slide{
      height: 140px;
    }
  }
}
@media(max-width:375px){
  .banner{
    &__slide{
      height: 120px;
    }
  }
}
</style>