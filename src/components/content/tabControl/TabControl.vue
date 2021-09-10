<template>
  <div class="tab-control">
    <div
      class="tab-control-item" 
      v-for="(item, index) in titles" 
      :key="index"
      @click="handleTabControl(index)"
      >
      <span :class="{ active: currentIndex === index }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleTabControl(index) {
      this.currentIndex = index
      this.$emit('handleTabControl', index)
    }
  }
};
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  align-items: center;
  padding: 12px 0;
  text-align: center;
  .tab-control-item {
    flex: 1;
    span {
      padding: 6px;
    }
    .active {
      color: var(--color-tint);
      border-bottom: 2px solid var(--color-tint);
    }
  }
}
</style>