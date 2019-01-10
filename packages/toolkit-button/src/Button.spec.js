// Importer Vue et le composant à tester
import MyComponent from './Button.vue'
import { shallowMount } from '@vue/test-utils'

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MyComponent);
  });

  it("renders without errors", () => {
    expect(MyComponent.methods.test()).toBe('test');
  });

})
