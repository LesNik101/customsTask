<template>
  <v-card elevation="9" class="sidebar">
    <v-navigation-drawer permanent width="337">
      <v-list>
        <v-list-group value="true" v-for="itemGroup in config" :key="itemGroup">
          <template v-slot:activator>
            <v-list-item-title>{{ itemGroup.title }}</v-list-item-title>
          </template>

          <v-list-item v-for="item in itemGroup.items" :key="item" link>
            <v-list-item-icon>
              <v-icon size="13">$vuetify.icons.{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import sideBarConfig from "@/configs/SideBarConfig"
export default {
  computed: {
    config() {
      return sideBarConfig
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar.v-sheet.v-card {
  border-radius: 0;
}

.v-list-item__icon {
  background: url(@/assets/svg/EllipseBackground.svg) 0 0/100% 100% no-repeat;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
