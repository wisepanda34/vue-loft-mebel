<template>
  <section class='cards'>

      <div class='cards__wrapper'>
        <OneCard v-for="item in items" :key="item.id" :item="item"/>
      </div>

  </section>
</template>

<script>
import OneCard from "@/components/OneCard.vue"
import {mapGetters} from "vuex";

export default {
  name: "cards",
  components: {OneCard},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cards {
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0;
  }
}

@media (max-width: 1100px) {
  &__cards {
    &__cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 850px) {
  &__cards {

    &__cards {
      justify-content: space-around;
    }
  }
}

@media (max-width: 550px) {
  .choose {
    &__cards {
      grid-template-columns: 1fr;
    }
  }
}
</style>