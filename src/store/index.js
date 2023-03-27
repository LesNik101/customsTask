import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"
import objectsConfig from "@/configs/objectsConfig"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionaryTypes: [],
    dictionaryList: [],
    directory: null,
  },
  getters: {},
  mutations: {
    setDictionaryTypes(state, dictionaryTypes) {
      state.dictionaryTypes = dictionaryTypes
    },
    setDictionaryList(state, dictionaryList) {
      state.dictionaryList = dictionaryList
    },
    addDictionary(state, newDictionary) {
      state.dictionaryList.push(newDictionary)
    },
    updateDictionary(state, item) {
      const index = state.dictionaryList.findIndex(({ id }) => id === item.id)
      console.log(index)
      if (index !== -1) {
        const selected = state.dictionaryList[index]
        state.dictionaryList.splice(index, 1, {
          ...selected,
          ...item,
        })
      }
    },
    setDirectory(state, directory) {
      state.directory = directory
    },
    deleteDictionary(state, removeId) {
      state.dictionaryList = state.dictionaryList.filter(
        ({ id }) => id !== removeId
      )
    },
  },
  actions: {
    async fetchDictionaryTypes({ commit }) {
      try {
        const response = await axios.get("https://localhost:44326/Dictionary")
        commit("setDictionaryTypes", response.data)
      } catch (ex) {
        console.error(ex)
      }
    },
    async loadDictionaryByCode({ state, commit }) {
      try {
        const response = await axios.get(
          `https://localhost:44326/Dictionary/${state.directory}`
        )
        commit("setDictionaryList", response.data.content)
      } catch (ex) {
        console.error(ex)
      }
    },
    async addNewDictionary({ state, commit }, newData) {
      const newDictionary = { ...objectsConfig[state.directory], ...newData }
      newDictionary.dateUpdate = new Date().toISOString()
      let myStringify = JSON.stringify(newDictionary)
      myStringify = "3" + myStringify
      const response = await axios.post(
        `https://localhost:44326/Dictionary/${state.directory}`,
        myStringify,
        { headers: { "Content-Type": "application/json" } }
      )
      commit("addDictionary", response.data)
    },
    async updateDictionary({ state, commit }, { newData, oldDictionary }) {
      const dictionary = { ...oldDictionary, ...newData }
      dictionary.dateUpdate = new Date().toISOString()
      let myStringify = JSON.stringify(dictionary)
      myStringify = "3" + myStringify + state.directory
      const response = await axios.put(
        `https://localhost:44326/Dictionary/${state.directory}`,
        myStringify,
        { headers: { "Content-Type": "application/json" } }
      )
      commit("updateDictionary", response.data)
    },
    async deleteDictionary({ state, commit }, removeId) {
      await axios.delete(
        `https://localhost:44326/Dictionary/${state.directory}/${removeId}`
      )
      commit("deleteDictionary", removeId)
    },
    async applyFilter({ state, commit }, filterParam) {
      let params = []
      for (const [key, field] of Object.entries(filterParam)) {
        if (field.value !== "") {
          params.push(
            `${key}${field.separator}${field.starBrackets ? "*" : ""}${
              field.value
            }${field.starBrackets ? "*" : ""}`
          )
        }
      }
      const filters = params.join(";")
      console.log("filters", filters)
      try {
        const response = await axios.get(
          `https://localhost:44326/Dictionary/${state.directory}`,
          {
            params: {
              filters,
            },
          }
        )
        commit("setDictionaryList", response.data.content)
      } catch (ex) {
        console.error(ex)
      }
    },
  },
})
