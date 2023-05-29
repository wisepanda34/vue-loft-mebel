<template>
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
</template>
<script>
import MySelect from "@/components/UI/MySelect.vue";

export default {
  name: "SortCatalog",
  components: {MySelect},
  data(){
    return{
      selectedSort:'by popularity',
      sortOptions:[
        {value:'popular', name:'by popularity'},
        {value:'descending', name:'descending price'},
        {value:'ascending', name:'ascending price'},
      ]
    }
  },
  mounted() {
    // Установка первой опции по умолчанию
    if (!this.selectedSort && this.sortOptions.length > 0) {
      this.selectedSort = this.sortOptions[0].value;
    }
  },
  watch:{
    selectedSort(newValue){

    }
  }

}
</script>

<style lang="scss" scoped>
.select-sort{
  text-align: end;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  option{
    margin-right: 20px;
  }
}
.sortCatalog{
  padding: 30px 0;

  &__btn{

  }
  &__burger{
    font-size: 12px;
    line-height: 1.2;
    color: #414141;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span{
      position: relative;
      width: 8px;
      height: 1px;
      background: #000000;
      margin-left: 20px;
      &::before{
        content:'';
        position: absolute;
        top: -5px;
        right: 0;
        width: 18px;
        height: 1px;
        background: #000000;
      }
      &::after{
        content:'';
        position: absolute;
        top: 4px;
        right: 0;
        width: 12px;
        height: 1px;
        background: #000000;
      }
    }
  }
  &__select{
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}

@media (max-width: 992px) {
  .sortCatalog{
    &__wrapper{
      justify-content: space-between;
    }
    &__btn{
      display: block;
    }
  }
}
</style>