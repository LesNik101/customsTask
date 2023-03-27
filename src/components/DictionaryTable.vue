<template>
  <v-card class="dictionary-table" elevation="9">
    <v-data-table
      class="p-3"
      hide-default-footer
      :headers="headers"
      :items="dictionaryList"
      single-select
      @click:row="rowClick"
      :item-class="itemClass"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "DictionaryTable",
  props: {
    value: {
      type: Object,
      required: false,
    },
  },
  data: () => ({
    headers: [
      {
        text: "Наименование",
        value: "name",
      },
      {
        text: "Код",
        value: "code",
      },
      {
        text: "Дата начала действия",
        value: "dateActivate",
      },
      {
        text: "Дата окончания действия",
        value: "dateDeactivate",
      },
    ],
    selectedItem: [],
  }),
  computed: {
    ...mapState({
      dictionaryList: (state) => state.dictionaryList,
    }),
  },
  methods: {
    rowClick(item) {
      this.$emit("input", item)
    },
    itemClass(item) {
      return this.value === item ? "selected" : ""
    },
  },
}
</script>

<style lang="scss" scoped>
.dictionary-table {
  flex: 1 1 auto;
  padding: 20px;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #5a5a5a;
  font-size: 16px;
}

.selected {
  background: lightgray;
}
</style>
