import { createStore } from 'vuex';
import axios from 'axios';

const response = await axios.get('https://api.mocki.io/v2/016d11e8/product-widgets')

// Define your state structure with a TypeScript interface
interface State {
  color: object;
  letterColor: string;
  data: object;
}

// Create a new store instance
const store = createStore<State>({
  state: {
    color: ['#2E3A8C', '#2E3A8C', '#2E3A8C'],
    letterColor: '',
    data: response.data
  },
  mutations: {
    changeCheck(state: State, payload) {
      const newData = state.data.map(i => {
        if (i.id == payload.id) {
          return {...i, active: true}
        } else {
          return {...i, active: false}
        }
      })
      state.data = newData;
    }
  },
  actions: {
    handleCheck({ commit, state}, id) {
      commit("changeCheck", id);
    }
  },
  getters: {
    getColor (state: State) {
      return state.color;
    },
    getData (state: State) {
      return state.data;      
    }
  },
});

export default store;
