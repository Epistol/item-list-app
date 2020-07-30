import Vue from "vue";
import { ActionTree } from "vuex";
import { FruitState } from "@@/types/store/fruitstate";
import { RootState } from "@@/types/store/rootstate";

const actions: ActionTree<FruitState, RootState> = {
  getFruitsData({ commit }) {
    return Promise.all([
      this.$axios.get(`/api/fruit`, {
        params: {}
      })
    ]).then((result: any) => {
      const data = result[0]["data"];
      if (data) {
        commit("SET_DATA", data);
      }
      return {
        data
      };
    });
  }
};

export default actions;
