<template>
  <section class="choose">
    <div class="container">
      <div class="choose__wrapper">

        <div  class="choose__filterWrapper"
              :class="{'choose__filterWrapper-active' : isFilterOpen}"
              ref="filterWrapper"
              @click.self="closeFilter"
              tabindex="-1"
              @keydown.esc="closeFilter"
        >
          <Filter class="choose__filter"
                  :class="{'choose__filter-active' : isFilterOpen}"
                  @filter-selected="onFilterSelected"
                  @type-selected="onTypeSelected"
                  @kind-selected="onKindSelected"
                  @close-filter="closeFilter"

          />
        </div>

        <div class="choose__block">
          <div class="choose__options">
            <my-button class="choose__btn" @click="openFilter">Filter</my-button>
<!--            <my-select-->
<!--                class="choose__select"-->
<!--                v-model="selectedSort"-->
<!--                :options="sortOptions"-->
<!--            />-->
            <v-select
                :selected="selectedSort"
                :options="sortOptions"
                @select="sorted"
            />

          </div>
          <div class="choose__cards">
            <OneCard :isBtnShow="isBtnShow" v-for="item in sortedAndFilteredProducts" :key="item.id" :item="item"/>
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
import VSelect from "@/components/UI/v-select.vue";
export default {
  name: "Choose",
  components: {VSelect, OneCard, MyButton, MySelect, Filter},
  data() {
    return {
      selectedSort: '',
      sortOptions:[
        {value:'popular', name:'by popularity'},
        {value:'descending', name:'descending price'},
        {value:'ascending', name:'ascending price'},
      ],
      selectedFilter:'',
      selectedType:'',
      selectedKind:'',
      isFilterOpen:false,
      isBtnShow: true
    }
  },
  watch:{
    isFilterOpen(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.$refs.filterWrapper.focus();
        });
      }
    },
  },
  mounted(){
    if(this.sortOptions.length>0)
    this.selectedSort = this.sortOptions[0].value
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
      const currentFilter = this.selectedFilter;
      const currentType = this.selectedType;
      const currentKind = this.selectedKind;
      let filteredProducts = this.sortedProducts;

      if (currentFilter) {
        filteredProducts = filteredProducts.filter(item =>
            item.category.toLowerCase().includes(currentFilter.toLowerCase())
        );
      }
      if (currentType) {
        filteredProducts = filteredProducts.filter(item =>
            item.typeProduct.toLowerCase().includes(currentType.toLowerCase())
        );
      }
      if (currentKind) {
        filteredProducts = filteredProducts.filter(item =>
            item.kindProduct.toLowerCase().includes(currentKind.toLowerCase())
        );
      }
      return filteredProducts;
    },
  },
  methods:{
    sorted(option){
      this.selectedSort = option.value
    },
    onFilterSelected(filterValue){
      this.selectedFilter = filterValue;
    },
    onTypeSelected(typeValue){
      this.selectedType = typeValue;
    },
    onKindSelected(kindValue){
      this.selectedKind = kindValue;
    },
    openFilter(){
      this.isFilterOpen = true
      document.body.classList.add('no-scroll');
    },
    closeFilter(){
      this.isFilterOpen=false
      document.body.classList.remove('no-scroll');
    },
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
  &__filterWrapper{
    flex:0 0 auto;
    transition: all 0.5s ease-out;
  }
  &__filter{
    transition: all 0.6s ease-out;
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
      position: relative;
    }
    &__filterWrapper{
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      z-index: 20;
      transition: all 0.6s ease-out;

    }
    &__filterWrapper-active{
      display: block;
      transition: all 0.6s ease-out;

    }
    &__filter{
      transform: translateX(-200%);
      transition: all 0.6s ease-out;

    }
    &__filter-active{
      transform: translateX(0);
      transition: all 0.6s ease-out;
      
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