import { MutationTree } from "vuex";
import { FruitState } from "@@/types/store/fruitstate";
import _ from "lodash";
import { Fruit } from "../../../types/fruit";

const mutations: MutationTree<FruitState> = {
  SET_DATA(state, data: any) {
    // For each entry, we'll check if it contain an object

    let goodFruits: Fruit[] = [];

    const addFruit = (data: any) => {
      if (_.isPlainObject(data)) {
        if (_.has(data, "description")) {
          // It's a fruit
          goodFruits.push(data);
        } else {
          // It has another object in it
          // (we don't check the other data, they are not with a description)
          Object.entries(data).map((element: any) => {
            addFruit(element[1]);
          });
        }
      }
    };

    Object.entries(data.data).map((value, index): any => {
      // If it is an object with data in it (or another object)
      addFruit(value[1]);
    });

    state.data = goodFruits;
  },

  SET_FRUIT_DATA(state, data: any) {
    // For each entry, we'll check if it contain an object
    state.fruitData = data;
  },

  DELETE_FRUIT(state, id: any) {
    console.log("DELETE_FRUIT -> state.data", state.data);
    console.log(
      "DELETE_FRUIT -> state.data 2",
      state.data.filter((item: any) => item.id !== id)
    );
    state.data = state.data.filter((item: any) => item.id !== id);
  }
};

export default mutations;
