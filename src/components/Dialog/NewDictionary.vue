<template>
  <v-container>
    <template v-if="dirValue.hasOwnProperty('name')">
      <v-row>Наименование</v-row>
      <v-row
        ><v-text-field
          label="Введите наименование"
          solo
          v-model="dirValue.name"
        ></v-text-field></v-row
    ></template>
    <v-row>
      <v-col cols="auto"
        ><v-row>Дата начала действия</v-row>
        <v-row>
          <DatePicker
            v-model="dirValue.dateActivate"
            label="Выберите дату"
          /> </v-row
      ></v-col>
      <v-spacer></v-spacer>
      <v-col cols="6"
        ><v-row>Дата окончания действия</v-row>
        <v-row
          ><DatePicker
            v-model="dirValue.dateDeactivate"
            label="Выберите дату" /></v-row
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "../UI/DatePicker.vue"
export default {
  name: "NewDictionary",
  components: {
    DatePicker,
  },
  props: {
    value: {
      type: Object,
    },
  },
  data: () => ({
    startDate: null,
    endDate: null,
  }),
  computed: {
    dirValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit("input", newValue)
      },
    },
  },
}
</script>

<style></style>
