<template>

  <Performance/>
  <Profit/>
  <Advantage/>
  <Service/>
  <Saving/>

</template>

<script>
import Performance from "@/components/Performance.vue";
import Profit from "@/components/Profit.vue";
import Advantage from "@/components/Advantage.vue";
import Service from "@/components/Service.vue";
import Saving from "@/components/Saving.vue";
export default {
  name: "About",
  components: { Saving, Service, Advantage, Profit, Performance}
}
</script>

<style scoped>

</style>