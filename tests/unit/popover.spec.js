import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount, shallowMount } from '@vue/test-utils'

import Vue from 'vue'
import Popover from '../../src/popover/popover'

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classs = wrapper.find('.popover-content').classes()
    expect(classs).to.include('position-bottom')
  })
  it('trigger默认为click', () => {
    const wrapper = mount(Popover, {
      attachToDocument: true,
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.popover-content').exists()).to.eq(true)
  })
  it('可以设置  trigger为hover', () => {
    const wrapper = mount(Popover, {
      propsData: {
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.popover-content').element).to.not.exist
    wrapper.find('.popover-wrapper').trigger('mouseenter')
    expect(wrapper.find('.popover-content').element).to.exist
    wrapper.find('.popover-wrapper').trigger('mouseleave')
    expect(wrapper.find('.popover-content').element).to.not.exist
  })
  it('可以设置 disabled.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        disabled: true,
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.popover-content').exists()).to.eq(false)
  })
  it('可以设置 zIndex.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>click</button>` },
        popover: `<div>这是弹出内容哦</div>`
      },
      propsData: {
        position: 'bottom',
        zIndex: 100
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.attributes('data-zindex')).to.be.eq('100')
  })
  it('scopedSlots', () => {
    const wrapper = shallowMount(Popover, {
      attachToDocument: true,
      slots: {
        default: {
          template: `<button id="xx">click me</button>`
        }
      },
      scopedSlots: {
        popover: `<div class="pp" slot-scope="close">click</div>`
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.popover-content').exists()).to.eq(true)
    console.log(wrapper.html())
    wrapper.find('.pp').trigger('click')
    // expect(wrapper.find('.popover-content').element).to.not.exist
    console.log(wrapper.find('.popover-content').element)
    console.log(wrapper.html())
  })
})
