<template>
  <div class="tab-bar-item" @click="handleTabBarBtn">
    <div class="img" v-if="!isActive">
      <slot name="img" />
    </div>
    <div class="img-active" v-else>
      <slot name="img-active" />
    </div>
    <div :class="{ active: isActive }"><slot name="text" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
  },
  props: {
    path: {
      type: String,
      default: "/home",
    },
  },
  methods: {
    handleTabBarBtn() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  margin-top: 5px;
  .img img,
  .img-active img {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
}
.active {
  color: rgb(255, 87, 119);
}
</style>