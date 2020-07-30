import { MutationTree } from "vuex";
import { FruitState } from "@@/types/store/fruitstate";

const mutations: MutationTree<FruitState> = {
  SET_DATA(state, data: any) {
    state.data = data;
  }
};

export default mutations;
