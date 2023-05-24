<template>
  <section class='cardsCatalog'>

      <div class='cardsCatalog__wrapper'>
        <OneCard v-for="item in products" :key="item.id" :item="item"/>
      </div>

  </section>
</template>

<script>
import OneCard from "@/components/OneCard.vue"
import {mapGetters} from "vuex";

export default {
  name: "CardsCatalog",
  components: {OneCard},
  data() {
    return {}
  },
  computed:{
    ...mapGetters({
      products: 'products/getProducts'
    })
  }
}
</script>


<style lang="scss" scoped>
.cardsCatalog {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0;
  }
}

@media (max-width: 1100px) {
  .cardsCatalog {
    &__wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 850px) {
  .cardsCatalog {

    &__wrapper {
      justify-content: space-around;
    }
  }
}

@media (max-width: 550px) {
  .cardsCatalog {
    &__wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>