<template>
  <section class="choose">
    <div class="container">
      <div class="choose__wrapper">
        <Filter class="choose__filter"/>
        <div class="choose__block">
          <div class="choose__options">
            <my-button class="choose__btn">Filter</my-button>
            <SortCatalog class="choose__sort"/>
          </div>
          <CardsCatalog />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Filter from "@/components/Filter.vue";
import SortCatalog from "@/components/SortCatalog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import CardsCatalog from "@/components/CardsCatalog.vue";
export default {
  name: "Choose",
  components: {CardsCatalog, MyButton, SortCatalog, Filter}
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