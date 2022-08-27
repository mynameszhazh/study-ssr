import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vue.Store({
    state: {
      counter: 108
    },
    mutations: {
      add (state) {
        state.counter++
      },
      init (state, counter) {
        state.counter = counter
      }
    },
    actions: {
      getCounter ({ commit }) {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('init', Math.random() * 100)
            resolve()
          }, 1000)
        })
      }
    }
  })
}
