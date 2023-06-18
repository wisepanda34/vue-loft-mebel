<template>
  <div class="v-select">
    <p class="v-select__default center"
       @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div class="v-select__options"
          v-if="areOptionsVisible"
    >
      <p class="v-select__item center"
         v-for="option in options"
         :key="option.value"
         @click="sortedOption(option)"

      >{{option.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type: Object,
      default: []
    },
    selected:{
      type: String,
      default: ''
    }
  },
  data(){
    return{
      areOptionsVisible: false,
    }
  },
  methods:{
    sortedOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false

    },
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" >
.v-select{
  position: relative;
  width: 150px;
  height: 26px;
  cursor: pointer;
  border: 1px solid #e7e7e7;
  font-size: 14px;


  &__default{
    padding: 3px 0;
  }
  &__options{
    position: absolute;
    top: 24px;
    left: -1px;
    width:calc(100% + 2px) ;
    background: #FFFFFF;
    border: 1px solid #e7e7e7;
    z-index: 50;
  }
  &__item{
    text-align: center;
    padding: 7px 0;
    font-size: 14px;

    &:hover{
      background: lightgray;
    }
  }
}
</style>