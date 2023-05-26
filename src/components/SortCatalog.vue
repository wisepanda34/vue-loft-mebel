<template>

  <div class='sortCatalog'>

        <div class='sortCatalog__burger'>
          <select class='sortCatalog__select' name="select-sort">
            <option value='by popularity'>by popularity</option>
            <option value='descending price'>descending price</option>
            <option value='ascending price'>ascending price</option>
          </select>
          <span></span>
        </div>

  </div>

</template>

<script>
export default {
  name: "SortCatalog"
}
</script>

<style lang="scss" scoped>
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