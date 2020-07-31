import { GetterTree } from "vuex";
// import { RootState, FruitState } from "@@/types";

const getters: any = {
  data: (state: any) => state.data,
  fruitData: (state: any) => state.fruitData
};

export default getters;
