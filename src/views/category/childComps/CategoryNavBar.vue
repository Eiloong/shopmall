<template>
  <div class="category-nav-bar">
    <nav-bar>
      <div slot="center">
        分类
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
components: {
  NavBar
}
}

</script>
<style lang="less" scoped>
.category-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>