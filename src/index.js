import Carousel3d from './Carousel3d.vue'
import Slide from './Slide.vue'
import CarouseSlide from './CarouseSlide.vue'

const install = (Vue) => {
  Vue.component('carousel3d', Carousel3d)
  Vue.component('slide', Slide)
  Vue.component('carouse-slide', CarouseSlide)
}

export default {
  install
}

export {
  Carousel3d,
  Slide,
  CarouseSlide
}
