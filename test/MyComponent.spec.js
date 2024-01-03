import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import axios from 'axios';
import productStore from '@/store/Product'; // adjust the path as necessary

jest.mock('axios');

describe('Product Store', () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({
      modules: {
        product: productStore
      }
    });
  });

  it('fetches products and updates state', async () => {
    const mockProducts = [{ id: 1, name: 'Test Product' }];
    axios.get.mockResolvedValue({ data: mockProducts });

    await store.dispatch('product/fetchProduct');

    expect(store.state.product.products).toEqual(mockProducts);
  });
});
