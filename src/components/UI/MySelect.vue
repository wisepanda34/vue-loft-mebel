<template>
  <select
      class="select"
      :value="modelValue"
      @input="changeOption($event.target.value)"
  >
<!--    <option disabled value="">Change item</option>-->
    <option
        v-for="option in options"
        :key="option.name"
        :value="option.name"
    >{{option.name}}</option>

  </select>
</template>

<script>
export default {
  name: "my-select",
  props:{
    modelValue:{
      type:String
    },
    options:{
      type: Array,
      default:()=>[]
    }
  },
  mounted() {
    if (!this.modelValue && this.options.length > 0) {
      this.changeOption(this.options[0].value);
    }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event)
    }
  }
}
</script>

<style scoped>
.select{
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 166px;
}

</style>