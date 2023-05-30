<template>
  <section class="choose">
    <div class="container">
      <div class="choose__wrapper">
        
        <Filter class="choose__filter"/>
        
        <div class="choose__block">
          <div class="choose__options">
            <my-button class="choose__btn">Filter</my-button>

            <div class='sortCatalog'>
              <div class='sortCatalog__burger'>
                <my-select
                    class="select-sort"
                    v-model="selectedSort"
                    :options="sortOptions"
                />
                <span></span>
              </div>
            </div>

            <div class='sortCatalog'>
              <div class='sortCatalog__burger'>
                <my-select
                    class="select-sort"
                    v-model="selectedFilter"
                    :options="filterOptions"
                />
                <span></span>
              </div>
            </div>

          </div>
          <CardsCatalog
              :items="sortedAndFilteredProducts"
          />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Filter from "@/components/Filter.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import CardsCatalog from "@/components/CardsCatalog.vue";
import {mapGetters} from "vuex";
export default {
  name: "Choose",
  components: {CardsCatalog, MyButton, MySelect, Filter},
  data() {
    return {
      selectedSort: '',
      sortOptions:[
        {value:'', name:'by popularity'},
        {value:'descending', name:'descending price'},
        {value:'ascending', name:'ascending price'},
      ],
      selectedFilter: '',
      filterOptions:[
        {value:'', name:'all'},
        {value:'bar stool', name:'Type Stool'}
      ]
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
      if (currentFilter === 'bar stool') {
        return this.sortedProducts.filter(item=>item.category.toLowerCase().includes(currentFilter.toLowerCase()))
      }

      return this.sortedProducts
    }
  },
}
</script>

<style lang="scss" scoped>
.choose{
  padding: 20px 0;
  &__wrapper{
    display: flex;
    justify-content: space-between;
  }
  &__block{
    width: 100%;
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
  &__sort{

  }
  &__cards{
  }
}
@media (max-width: 850px) {
  .choose{
    &__wrapper{
    }
    &__block{
      width: 100%;

    }
    &__options{
      justify-content: space-between;
      gap: 25px;
    }
    &__filter{
      display: none;
    }
    &__btn{
      display: block;
    }
  }
}
</style>