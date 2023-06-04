<template>
  <section class="choose">
    <div class="container">
      <div class="choose__wrapper">
        
        <Filter class="choose__filter" @filter-selected="onFilterSelected"/>
        
        <div class="choose__block">
          <div class="choose__options">
            <my-button class="choose__btn">Filter</my-button>
            <my-select
                class="choose__select"
                v-model="selectedSort"
                :options="sortOptions"
            />
          </div>
          <div class="choose__cards">
            <OneCard v-for="item in sortedAndFilteredProducts" :key="item.id" :item="item"/>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Filter from "@/components/Filter.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapGetters} from "vuex";
import OneCard from "@/components/OneCard.vue";
export default {
  name: "Choose",
  components: {OneCard, MyButton, MySelect, Filter},
  data() {
    return {
      selectedSort: '',
      sortOptions:[
        {value:'', name:'by popularity'},
        {value:'descending', name:'descending price'},
        {value:'ascending', name:'ascending price'},
      ],
      selectedFilter:'',
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getProducts'
    }),
    sortedProducts() {
      if (this.selectedSort === 'ascending') {
        return [...this.products].sort((a,b)=>a.price - b.price)
      }

      if (this.selectedSort === 'descending') {
        return [...this.products].sort((a,b)=>b.price - a.price)
      }

      return this.products
    },
    sortedAndFilteredProducts() {
      const currentFilter = this.selectedFilter
      if (currentFilter === 'kitchen') {
        return this.sortedProducts.filter(item=>item.category.toLowerCase().includes(currentFilter.toLowerCase()))
      } if (currentFilter === 'living room') {
        return this.sortedProducts.filter(item=>item.category.toLowerCase().includes(currentFilter.toLowerCase()))
      }if (currentFilter === 'bedroom') {
        return this.sortedProducts.filter(item=>item.category.toLowerCase().includes(currentFilter.toLowerCase()))
      }

      return this.sortedProducts
    }
  },
  methods:{
    onFilterSelected(filterValue){
      this.selectedFilter=filterValue;
    }
  }
}
</script>

<style lang="scss" scoped>
.choose{
  padding: 20px 0;
  &__wrapper{
    display: flex;
    gap: 10px;
  }
  &__filter{
    flex:0 0 auto;
  }
  &__block{
    flex:1 1 auto;
  }
  &__options{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  &__btn{
    display: none;
    width: 138px;
    height: 40px;
    background: #cccccc;
    border:none;
    cursor: pointer;
    transition:all 0.2s ease ;
    &:hover{
      background: #e0dfdf;
    }
  }
  &__select{
    text-align: center;
  }
  &__cards{
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0;
  }
}
@media (max-width: 1140px) {
  .choose{
    &__cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 860px) {
  .choose{
    &__wrapper{
    }
    &__filter{
      display: none;
    }
    &__block{
      width: 100%;
    }
    &__options{
      justify-content: space-between;
      gap: 25px;
    }
    &__btn{
      display: block;
    }
    &__cards {
      justify-content: space-around;
    }
  }
}
@media (max-width: 576px) {
  .choose {
    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>