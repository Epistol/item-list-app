import Vue from "vue";
import { ActionTree } from "vuex";
import { FruitState } from "@@/types/store/fruitstate";
import { RootState } from "@@/types/store/rootstate";
import { Fruit } from "~~/types/fruit";

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
  },

  getFruitData({ commit }, id) {
    return Promise.all([
      this.$axios.get(`/api/fruit/` + id, {
        params: {}
      })
    ]).then((result: any) => {
      const data = result[0]["data"];
      if (data) {
        commit("SET_FRUIT_DATA", data);
      }
      return {
        data
      };
    });
  },

  addFruit(
    { commit },
    { name, image, price, isFruit, color, description, taste }: Fruit
  ) {
    return Promise.all([
      this.$axios.post(`/api/fruit/`, {
        name,
        image,
        price,
        isFruit,
        color,
        description,
        taste,
        expires: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toISOString()
      })
    ]).then((result: any) => {
      return { result };
    });
  },

  deleteFruit({ commit }, id) {
    return Promise.all([
      this.$axios.delete(`/api/fruit/` + id, {
        params: {}
      })
    ]).then((result: any) => {
      if (result[0].status === 200) {
        commit("DELETE_FRUIT", id);
      }
      return {};
    });
  }
};

export default actions;
