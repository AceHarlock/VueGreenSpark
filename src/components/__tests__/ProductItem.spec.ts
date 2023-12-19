import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductItem from '../product/ProductItem.vue'

describe('ProductIem', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductItem, { props: { 
        "id": 1,
        "type": "plastic bottles",
        "amount": 100,
        "action": "collects",
        "active": true,
        "linked": true,
        "selectedColor": "green"
     } })
    expect(wrapper.text()).toContain('This product collects');
    expect(wrapper.text()).toContain('100 plastic bottles');
  })
})