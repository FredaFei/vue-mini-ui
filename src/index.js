import Button from './button/index.js'
import Input from './input/index.js'
import Toast from './toast/index.js'

const components = [Button, Input]
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    component.install(Vue)
  })
  Vue.use(Toast)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
export { Toast, Button, Input }

// export { default as Button } from './button/button.vue'
// export { default as ButtonGroup } from './button/buttonGroup'
// export { default as Cascader } from './cascader/cascader.vue'
// export { default as CascaderItem } from './cascader/cascaderItem.vue'
// export { default as Collapse } from './collapse/collapse.vue'
// export { default as CollapseItem } from './collapse/collapseItem.vue'
// export { default as DatePicker } from './datePicker/datePicker.vue'
// export { default as Moment } from './datePicker/moment.js'
// export { default as Col } from './grid/gCol.vue'
// export { default as Row } from './grid/gRow.vue'
// export { default as Input } from './input/input.vue'
// export { default as Layout } from './layout/layout.vue'
// export { default as Header } from './layout/header.vue'
// export { default as Sider } from './layout/sider.vue'
// export { default as Content } from './layout/content.vue'
// export { default as Footer } from './layout/footer.vue'
// export { default as Nav } from './nav/nav.vue'
// export { default as NavItem } from './nav/navItem.vue'
// export { default as SubNav } from './nav/subNav.vue'
// export { default as Pager } from './pager/pager.vue'
// export { default as Popover } from './popover/popover.vue'
// export { default as Slides } from './slides/slides.vue'
// export { default as SlidesItem } from './slides/slidesItem.vue'
// export { default as Tabs } from './tabs/tabs.vue'
// export { default as TabsHeader } from './tabs/tabsHeader.vue'
// export { default as TabsItem } from './tabs/tabsItem.vue'
// export { default as TabsBody } from './tabs/tabsBody.vue'
// export { default as TabsPane } from './tabs/tabsPane.vue'
// export { default as Toast } from './toast/index.js'
// export { default as Uploader } from './uploader/uploader.vue'
// export { default as Icon } from './icon.vue'
// export { default as CollapseTransition } from './collapseTransition.vue'
// export { default as ClickOutside } from './clickOutside.js'
