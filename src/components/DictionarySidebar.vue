<template>
  <transition name="slide-fade" mode="out-in">
    <v-card width="430" elevation="9" class="dictionary-sidebar">
      <v-card-text>
        <v-row>Наименование</v-row>
        <v-row
          ><v-text-field
            solo
            hide-details
            v-model="filters.name.value"
          ></v-text-field
        ></v-row>
        <v-row>Дата начала действия</v-row>
        <v-row><DatePicker v-model="filters.dateActivate.value" /></v-row>
        <v-row>Дата окончания действия</v-row>
        <v-row><DatePicker v-model="filters.dateDeactivate.value" /></v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="#EBEBEB" @click="clearFilter"> Очистить </v-btn>

        <v-btn color="#0F4C82" @click="applyFilter(filters)" dark class="ml-7">
          Применить
        </v-btn>
      </v-card-actions>
    </v-card>
  </transition>
</template>

<script>
import { mapActions } from "vuex"
import DatePicker from "@/components/UI/DatePicker.vue"
export default {
  name: "DictionarySidebar",
  components: {
    DatePicker,
  },
  data: () => ({
    filters: {
      name: {
        value: "",
        separator: "~",
        starBrackets: true,
      },
      dateActivate: {
        value: "",
        separator: ">=",
        starBrackets: false,
      },
      dateDeactivate: {
        value: "",
        separator: "<=",
        starBrackets: false,
      },
    },
  }),
  computed: {},
  methods: {
    ...mapActions({
      applyFilter: "applyFilter",
      loadDictionaryByCode: "loadDictionaryByCode",
    }),
    clearFilter() {
      this.filters = {
        name: {
          value: "",
          separator: "~",
        },
        dateActivate: {
          value: "",
          separator: ">=",
        },
        dateDeactivate: {
          value: "",
          separator: "<=",
        },
      }
      this.loadDictionaryByCode()
    },
  },
}
</script>

<style lang="scss" scoped>
.dictionary-sidebar {
  flex: 0 1 auto;
  margin-left: 30px;
  margin-right: -15px;
  padding: 30px;

  .v-input {
    margin-bottom: 20px;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
