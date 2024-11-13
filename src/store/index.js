import { createStore } from 'vuex';
import { state } from './modules/projectState';
import { mutations } from './modules/projectMutations'
import { actions } from './modules/projectActions';
import { getters } from './modules/projectGetters';

export default createStore({
  state,
  mutations,
  actions,
  getters,
});