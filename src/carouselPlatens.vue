/*
 * 3D车牌号相册展示
 * @Author: hyzh 
 * @Date: 2018-06-09 09:55:36 
 * @Last Modified by: hyzh
 * @Last Modified time: 2018-06-09 16:51:43
 */
<template>
  <carousel-3d ref="carousel3d"
    :display="3"
    class="carousel-plates"
    v-if="plateNums && plateNums.length > 0"
    :border="0"
    :space="140"
    :width="168"
    :height="60"
    :perspective="0"
    @before-slide-change="onSlideChange">
    <slide v-for="(plateNum, i) in plateNums"
      :index="i"
      :key="i"
      :slide-style="{
        backgroundColor: 'transparent'
      }"
      :translate-z="150"
      class="carousel-3d--slide">
      <PlateNum :plate-num="plateNum"
        class="carousel-plates--plate" />
    </slide>
  </carousel-3d>
</template>
<script>
import Carousel3d from './Carousel3d';
import Slide from './Slide';
import PlateNum from '../plateNum';
export default {
  name: 'carousel-platens',
  props: {
    plateNums: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      plateNum: ''
    };
  },
  computed: {},
  methods: {
    /**
     * 滚动前回调函数
     */
    onSlideChange(index) {
      this.$emit('before-slide-change', {
        index: index,
        val: this.plateNums[index]
      });
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
    }
  },
  components: {
    Carousel3d,
    Slide,
    PlateNum
  }
};
</script>

<style lang="scss">
.carousel-plates {
  .current .routine {
    font-size: 52px !important;
    width: 400px !important;
    // width: auto !important;
    // padding: 0 15px !important;
  }
  .carousel-3d--slide {
    .carousel-plates--plate {
      .routine {
        height: 92px !important;
        width: 336px;
        line-height: 92px !important;
        border: none !important;
        padding: 0;
      }
    }
  }
}
</style>
