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
      // If it's one the fruits that we added, we need to search in the array (not a plain object)
      if (value[0] === "more") {
        const addedFruits: any = value[1];

        addedFruits.map((element: any) => {
          if (_.has(element, "description")) {
            // It's a fruit
            goodFruits.push(element);
          }
        });
      }
    });

    state.data = goodFruits;
  },

  SET_FRUIT_DATA(state, data: any) {
    // For each entry, we'll check if it contain an object
    state.fruitData = data;
  },

  DELETE_FRUIT(state, id: any) {
    state.data = state.data.filter((item: any) => item.id !== id);
  }
};

export default mutations;
