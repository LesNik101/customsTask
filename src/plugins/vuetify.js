import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import customSVGs from "@/customSVGs"

Vue.use(Vuetify)

const props = {
  icons: {
    values: {},
  },
}

customSVGs.forEach((customSVG) => {
  props.icons.values[customSVG.name] = {
    component: customSVG,
    props: {
      name: customSVG.name,
    },
  }
})

export default new Vuetify(props)
