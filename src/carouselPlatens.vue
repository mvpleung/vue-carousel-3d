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
    },
    /**
     * 边框
     */
    border: {
      type: Number,
      default: 0
    },
    /**
     *slide之间的距离
     *单为px
     */
    space: {
      type: Number,
      default: 0
    },
    /**
     *slide宽度
     *单为px
     */
    width: {
      type: Number,
      default: 0
    },
    /**
     *slide高度
     *单为px
     */
    height: {
      type: Number,
      default: 0
    },
    /**
     *slide高度
     *rotateY 度数
     *可正负值
     */
    perspective: {
      type: Number,
      default: 0
    },
    /**
     *是否3D展示
     *
     */
    disable3d: {
      type: Boolean,
      default: false
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
  .carousel-3d--slide {
    .carousel-plates--plate {
      .routine {
        height: 92px !important;
        width: 336px !important;
        line-height: 92px !important;
        border: none !important;
        padding: 0;
      }
      .newEnergy {
        height: 92px !important;
        width: 336px !important;
        line-height: 92px !important;
        border: none !important;
        padding: 0;
      }
      .current .routine {
        font-size: 52px !important;
        width: 400px !important;
      }
      .current .newEnergy {
        font-size: 52px !important;
        width: 400px !important;
      }
    }
  }
}
</style>
