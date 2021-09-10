<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <div slot="center">商城</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="less" scoped>
.profile-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>