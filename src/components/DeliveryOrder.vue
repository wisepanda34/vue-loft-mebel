<template>
  <section class="delivery">
    <div class="container">
      <div class="delivery__wrapper">
       <h1>Delivery</h1>
        <p>Each client can purchase goods in our store and pick them up in our warehouse, as well as receive goods delivered to their homes with assembly.</p>
        <p>Our specialists will qualitatively assemble the furniture you have chosen. Each client will be satisfied with the purchase. </p>
        <p>Contact phone number for consultation:</p>

        <a class='delivery__phone flex' href='tel: 19648999119'>
          <img src="/images/icons/phone-black.svg" alt="i"/>
          <span>+1 (964) 89 99 119</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DeliveryOrder"
}
</script>

<style lang="scss" scoped>
.delivery{
  min-height: 400px;
  &__wrapper{
    padding: 20px 0;
    h1{
      text-align: center;
    }
    p{
      line-height: 2em;
      text-indent:30px;
      margin: 20px 0;
    }
  }
  &__phone{
    display: block;
    display: flex;
    justify-content: center;
    span{
      font-weight: 700;
      font-size: 20px;
    }
    img{
      height: 24px;
    }
    &:hover{
      color: #366a7a;
    }
  }
}

</style>