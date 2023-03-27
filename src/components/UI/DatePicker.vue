<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        readonly
        v-bind="attrs"
        v-on="on"
        solo
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
    },
  },
  data: () => ({
    menu: false,
  }),
  computed: {
    date: {
      get() {
        return this.value
      },
      set(newValue) {
        this.menu = false
        this.$emit("input", newValue)
      },
    },
  },
}
</script>

<style></style>
