<template>
  <Menu/>
  <Bonus/>
  <Profile/>
</template>

<script>

import Bonus from "@/components/Bonus.vue";
import Profile from "@/components/Profile.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "Account",
  components: { Menu, Profile, Bonus},

}
</script>

<style lang="scss" scoped>

</style>