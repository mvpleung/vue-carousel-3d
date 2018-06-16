export default {
  /**
   * Slide change 前触发
   * @param {Number} currentIndex
   * @param {Object} slide
   */
  '@before-slide-change': Function,
  /**
   * Slide change 后触发
   * @param {Number} currentIndex
   * @param {Object} slide
   */
  '@after-slide-change': Function,
  /**
   * 最后一个 slide 展示时触发
   * @param {Number} currentIndex
   * @param {Object} slide
   */
  '@last-slide': Function,
  /**
   * 拖拽回调
   * @param {Number} index
   * @param {Number} towards 拖拽方向，取值范围 ['next', 'prev']
   */
  '@dragEvent': Function
};
