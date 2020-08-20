export const getStoreElement = (storeElement: any) => {
  return Object.keys(storeElement).reduce((result: any, key: string) => {
    result[key] = jest.fn();
    return result;
  }, {});
};

import actions from "~/store/fruit/actions";
import mutations from "~/store/fruit/mutations";
import getters from "~/store/fruit/getters";

export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: getStoreElement(actions),
  mutations: getStoreElement(mutations),
  getters: getStoreElement(getters)
};
