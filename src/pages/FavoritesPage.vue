<template>

  <section class="favoritesList">
    <div class="container">
      <div class="favoritesList__wrapper">


        <h3 >Your favorites</h3>
        <h4><span>{{favorites.length}}</span> items</h4>


        <div class="favoritesList__cards">
          <OneCard v-for="item in favorites" :key="item.id" :item="item"/>
        </div>


      </div>
    </div>
  </section>

</template>

<script>

import OneCard from "@/components/OneCard.vue";
import {mapGetters} from "vuex";

export default {
  name: "FavoritesPage",
  components: {OneCard},
  computed:{
    ...mapGetters({
      favorites: 'favorites/getFavorites'
    })
  }
}
</script>

<style lang="scss" scoped>
.favoritesList{
  &__wrapper{
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
  &__cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px 0;
  }
}
@media (max-width: 1120px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 830px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 550px) {
  .favoritesList {
    &__cards {
      grid-template-columns: 1fr;
    }
  }
}
</style>