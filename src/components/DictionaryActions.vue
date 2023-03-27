<template>
  <v-container class="dictionary-action">
    <v-row align="center">
      <div class="dictionary-action__select select-container">
        <v-select
          solo
          :items="selectItems"
          v-model="selectedDirectory"
          hide-details
          height="32"
        >
        </v-select>
      </div>
      <v-btn
        class="mr-1 ml-7"
        dark
        small
        color="#0F4C82"
        width="32"
        height="32"
        @click="openDialogToAdd"
      >
        <v-icon size="17" dark> $vuetify.icons.AddNew </v-icon>
      </v-btn>
      <v-btn
        class="mx-1"
        dark
        small
        color="#0F4C82"
        width="32"
        height="32"
        :disabled="selectedDictionary === null"
        @click="openDialogToEdit"
      >
        <v-icon size="17" dark> $vuetify.icons.BxsPencil </v-icon>
      </v-btn>
      <v-btn
        class="mx-1"
        dark
        small
        color="#0F4C82"
        width="32"
        height="32"
        :disabled="selectedDictionary === null"
        @click="openDialogToDelete"
      >
        <v-icon size="17" dark> $vuetify.icons.DeleteIcon </v-icon>
      </v-btn>
      <v-btn class="mx-1" dark small color="#0F4C82" width="32" height="32">
        <v-icon dark size="17"> $vuetify.icons.DownloadIcon </v-icon>
      </v-btn>
      <v-btn
        class="mx-1"
        dark
        small
        color="#0F4C82"
        width="32"
        height="32"
        @click="$emit('filterActionToggle')"
      >
        <v-icon size="17" dark> $vuetify.icons.FilterIcon </v-icon>
      </v-btn>
    </v-row>
    <DialogAction
      v-model="dialog"
      @okAction="okAction"
      :options="actionType.modalOptions"
      :dirValue="dirValue"
    />
  </v-container>
</template>

<script>
import DictionaryOperation from "@/enums/DictionaryOperation"
import { mapState, mapActions, mapMutations } from "vuex"
import DialogAction from "@/components/DialogAction.vue"
export default {
  components: {
    DialogAction,
  },
  props: {
    value: {
      type: Object,
      requred: true,
    },
  },
  data: () => ({
    dialog: false,
    actionType: DictionaryOperation.ADD,
    dirValue: null,
  }),
  mounted() {
    this.fetchDictionaryTypes()
  },
  watch: {
    selectedDirectory() {
      this.selectedDictionary = null
      this.loadDictionaryByCode()
    },
    dictionaryTypes() {
      this.selectedDirectory = this.selectItems[0]?.value || null
    },
  },
  computed: {
    ...mapState({
      dictionaryTypes: (state) => state.dictionaryTypes,
      directory: (state) => state.directory,
    }),
    selectedDirectory: {
      get() {
        return this.directory
      },
      set(newValue) {
        this.setDirectory(newValue)
      },
    },
    selectItems() {
      return this.dictionaryTypes.map((directory) => ({
        text: directory.name,
        value: directory.code,
      }))
    },
    selectedDictionary: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit("input", newValue)
      },
    },
  },
  methods: {
    ...mapMutations({
      setDirectory: "setDirectory",
    }),
    ...mapActions({
      fetchDictionaryTypes: "fetchDictionaryTypes",
      loadDictionaryByCode: "loadDictionaryByCode",
      addNewDictionary: "addNewDictionary",
      updateDictionary: "updateDictionary",
      deleteDictionary: "deleteDictionary",
    }),
    directoryChange(newDictionaryCode) {
      this.selectedDirectory = newDictionaryCode
    },
    openDialogToAdd() {
      this.actionType = DictionaryOperation.ADD
      this.dirValue = {
        id: null,
        dateActivate: "",
        dateDeactivate: "",
        ...(this.selectedDirectory != "dirUsers" ? { name: "" } : null),
      }
      this.openDialog()
    },
    openDialogToEdit() {
      this.actionType = DictionaryOperation.UPDATE
      this.dirValue = {
        id: this.selectedDictionary.id,
        dateActivate: this.selectedDictionary.dateActivate,
        dateDeactivate: this.selectedDictionary.dateDeactivate,
        ...(this.selectedDirectory != "dirUsers"
          ? { name: this.selectedDictionary.name }
          : null),
      }
      this.openDialog()
    },
    openDialogToDelete() {
      this.actionType = DictionaryOperation.DELETE
      this.openDialog()
    },
    okAction(value) {
      if (this.actionType == DictionaryOperation.ADD) {
        this.addNewDictionary(value)
      }
      if (this.actionType == DictionaryOperation.UPDATE) {
        this.updateDictionary({
          newData: value,
          oldDictionary: this.selectedDictionary,
        })
      }
      if (this.actionType == DictionaryOperation.DELETE) {
        this.deleteDictionary(this.selectedDictionary.id)
      }
    },
    openDialog() {
      this.dialog = true
    },
  },
}
</script>

<style lang="scss">
.dictionary-action {
  margin: 0 0 20px;

  .select-container {
    width: 400px;
  }
}

.v-text-field.v-text-field--solo .v-input__control {
  min-height: 32px;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: inset 0px 2px 5px #cdcdcd;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 32px;
}

.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background: #556a7c !important;
}
</style>
