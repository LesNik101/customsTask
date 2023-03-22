<template>
  <div>
    <v-app-bar color="#0F4C82" dark dence>
      <v-app-bar-nav-icon x-large></v-app-bar-nav-icon>
      <v-app-bar-title>Администратор Авин Андрей Александрович</v-app-bar-title>
      <v-spacer />
      <div class="actions">
        <v-icon size="32">$vuetify.icons.SearchIcon</v-icon>
        <v-btn light fab x-small>
          <v-icon>$vuetify.icons.BellNotification</v-icon>
        </v-btn>
        <v-btn light fab x-small>
          <v-icon>$vuetify.icons.PlusIcon</v-icon>
        </v-btn>
        <v-btn light fab x-small>НСИ</v-btn>
        <v-btn light fab x-small>
          <v-icon>$vuetify.icons.ChartInsert</v-icon>
        </v-btn>
        <v-icon size="32">$vuetify.icons.QuestionIcon</v-icon>
      </div>
      <v-btn text class="mr-9">Выход</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {}
</script>

<style>
.actions {
  display: flex;
  gap: 20px;
  margin: 0 8px;
}
</style>
