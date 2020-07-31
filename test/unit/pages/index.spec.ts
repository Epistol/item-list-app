import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import Vuex, { Store } from "vuex";
import { RootState } from "@@/types/store/rootstate";
import stubs from "@@/test/mocks/stubs";
import mocks from "@@/test/mocks/mocks";
import globalStore from "@@/test/mocks/store";
import { fruitList } from "@@/test/mocks/api/fruit";

import Index from "@/pages/index.vue";

const localVue = createLocalVue();

localVue.use(VueCompositionApi);
localVue.use(Vuex);

globalStore.modules.fruit.getters.data = jest.fn(() => fruitList);

describe("Index.vue", () => {
  let store: Store<RootState>;
  let wrapper: any;
  let options: any;

  beforeEach(() => {
    store = new Vuex.Store(globalStore);
    mocks.$store = store;
    options = { localVue, stubs, mocks, store };
    wrapper = shallowMount(Index, options);
  });

  describe("component", () => {
    it("exists", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("renders correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
