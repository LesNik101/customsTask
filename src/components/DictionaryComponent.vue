<template>
  <div class="dictionary-component">
    <v-row class="dictionary-component__actions">
      <DictionaryActions
        v-model="selectedDictionary"
        @filterActionToggle="fiterActive = !fiterActive"
      />
    </v-row>
    <v-row class="dictionary-component__cards">
      <DictionaryTable v-model="selectedDictionary" />
      <DictionarySidebar v-show="fiterActive" />
    </v-row>
  </div>
</template>

<script>
import DictionaryActions from "@/components/DictionaryActions.vue"
import DictionaryTable from "@/components/DictionaryTable.vue"
import DictionarySidebar from "@/components/DictionarySidebar.vue"
export default {
  name: "DictionaryComponent",
  components: {
    DictionaryActions,
    DictionaryTable,
    DictionarySidebar,
  },
  data: () => ({
    selectedDictionary: null,
    fiterActive: false,
  }),
}
</script>

<style lang="scss" scoped>
.dictionary-component {
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  .dictionary-component__actions {
    flex: 0 1 auto;
  }

  .dictionary-component__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .row {
    margin: 0;
  }
}
</style>
