import { createStore } from 'vuex'

import auth from "@/modules/auth/store"
import building from "@/modules/building/store/building"


// Create a new store instance.
const store = createStore({

  modules: {
    auth,
    building,
  }
})

export default store