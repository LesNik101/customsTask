<template>
  <v-app>
    <NavBar />

    <v-main>
      <div class="d-flex fill">
        <SideBar />
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import SideBar from "@/components/SideBar.vue"
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
.fill {
  height: 100%;
  width: 100%;
}
</style>
