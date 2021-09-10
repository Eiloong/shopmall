<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" class="left" @click="handleReturnHome"></div>
    <div slot="center" class="cneter">
      <div 
        v-for="(item, index) in titles" 
        :key="index" 
        @click="handleCenterBtn(index)"
        :class="{active: currentIndex === index}"
        >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    NavBar,
  },
  methods: {
    handleReturnHome() {
      this.$router.go(-1)
    },
    handleCenterBtn(index) {
      this.currentIndex = index
      this.$emit('handleCenterBtn', index)
    }
  }
};
</script>
<style lang="less" scoped>
.detail-nav-bar {
  position: relative;
  text-align: center;
  background-color: #fff;
  font-size: 13px;
  z-index: 1;
  .left {
    position: relative;
    top: 0;
    left: 25px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #666;
    border-left: 2px solid #666;
    transform:rotate(-45deg)
  }
  .cneter {
    display: flex;
    padding: 0 10px;
    div {
      flex: 1;
    }
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>