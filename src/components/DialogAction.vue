<template>
  <v-dialog v-model="dialog" width="600">
    <v-card width="600" class="dialog-action__card">
      <v-card-title class="text-h5">
        {{ options?.title?.text || "" }}
      </v-card-title>
      <v-card-text v-if="!options?.body?.hide">
        <component :is="dialogComponent" v-model="dataDir"> </component>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="#EBEBEB" @click="cancelAction">
          {{ options?.actions?.cancelButton.text }}
        </v-btn>

        <v-btn color="#0F4C82" @click="okAction" dark>
          {{ options?.actions?.okButton.text }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import NewDictionary from "./Dialog/NewDictionary.vue"

export default {
  name: "DialogAction",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    dirValue: {
      type: Object,
      require: false,
    },
  },
  components: {
    NewDictionary,
  },
  data: () => ({
    dialogComponent: "NewDictionary",
    dataDir: null,
  }),
  watch: {
    dirValue(newValue) {
      this.dataDir = { ...newValue }
    },
  },

  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit("input", newValue)
      },
    },
  },
  methods: {
    cancelAction() {
      this.closeDialog()
    },
    okAction() {
      this.$emit("okAction", this.dataDir)
      this.closeDialog()
    },
    closeDialog() {
      this.dialog = false
    },
  },
}
</script>

<style>
.dialog-action__card {
  padding: 40px 50px;
}
.v-application .text-h5 {
  font-size: 20px !important;
  font-weight: 400;
}
</style>
