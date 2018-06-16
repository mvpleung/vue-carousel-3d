export default {
  perspective: {
    type: [Number, String],
    default: 35
  },
  display: {
    type: [Number, String],
    default: 5
  },
  loop: {
    type: Boolean,
    default: true
  },
  animationSpeed: {
    type: [Number, String],
    default: 500
  },
  dir: {
    type: String,
    default: 'rtl'
  },
  width: {
    type: [Number, String],
    default: 360
  },
  height: {
    type: [Number, String],
    default: 270
  },
  border: {
    type: [Number, String],
    default: 1
  },
  space: {
    type: [Number, String],
    default: 'auto'
  },
  startIndex: {
    type: [Number, String],
    default: 0
  },
  clickable: {
    type: Boolean,
    default: true
  },
  disable3d: {
    type: Boolean,
    default: false
  },
  minSwipeDistance: {
    type: Number,
    default: 10
  },
  inverseScaling: {
    type: [Number, String],
    default: 300
  },
  controlsVisible: {
    type: Boolean,
    default: false
  },
  controlsPrevHtml: {
    type: String,
    default: '&lsaquo;'
  },
  controlsNextHtml: {
    type: String,
    default: '&rsaquo;'
  },
  controlsWidth: {
    type: [String, Number],
    default: 50
  },
  controlsHeight: {
    type: [String, Number],
    default: 50
  },
  onLastSlide: {
    type: Function,
    default: () => {}
  },
  onSlideChange: {
    type: Function,
    default: () => {}
  },
  bias: {
    type: String,
    default: 'left'
  },
  onMainSlideClick: {
    type: Function,
    default: () => {}
  },
  slides: {
    type: Array,
    default() {
      return [];
    }
  },
  slideStyle: {
    type: Object
  },
  slideClass: String,
  slideTranslateZ: Number
};
