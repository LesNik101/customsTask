<template>
  <v-app>
    <NavBar />

    <v-main>
      <div class="d-flex h-100">
        <SideBar />
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import SideBar from "./components/SideBar.vue"
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  data: () => ({
    //
  }),
}
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100%;
}
</style>
