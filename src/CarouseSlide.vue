/*
 * 3D轮播
 * @Author: liangzc 
 * @Date: 2018-06-15 16:33:40 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-06-16 10:53:07
 */
<template>
  <carousel-3d ref="carousel3d"
    v-bind="$props"
    :count="slides ? slides.length : 0"
    @before-slide-change="beforeSlideChange"
    @after-slide-change="afterSlideChange"
    @dragEvent="dragEvent"
    @last-slide="lastSlide">
    <slide v-for="(slide, i) in slides"
      :index="i"
      :key="i"
      :slide-style="slideStyle"
      :translate-z="slideTranslateZ"
      :class="slideClass">
      <slot :slide="slide" />
    </slide>
  </carousel-3d>
</template>
<script>
import Carousel3d from './Carousel3d';
import Slide from './Slide';
import props from './props';
export default {
  name: 'carousel-slide',
  props,
  data() {
    return {};
  },
  computed: {},
  methods: {
    getSlide(index) {
      return this.slides ? this.slides[index] : null;
    },
    beforeSlideChange(currentIndex) {
      this.$emit(
        'before-slide-change',
        currentIndex,
        this.getSlide(currentIndex)
      );
    },
    afterSlideChange(currentIndex) {
      this.$emit(
        'after-slide-change',
        currentIndex,
        this.getSlide(currentIndex)
      );
    },
    dragEvent(currentIndex, towards) {
      this.$emit(
        'dragEvent',
        currentIndex,
        towards,
        this.getSlide(currentIndex)
      );
    },
    lastSlide(currentIndex) {
      this.$emit('last-slide', currentIndex, this.getSlide(currentIndex));
    },
    /***
     * 下一页
     */
    next() {
      this.$refs.carousel3d.goNext();
    },
    /**
     **上一页
     */
    prev() {
      this.$refs.carousel3d.goPrev();
    },
    goSlide(index) {
      this.$refs.carousel3d.goSlide(index);
    }
  },
  components: {
    Carousel3d,
    Slide
  }
};
</script>
