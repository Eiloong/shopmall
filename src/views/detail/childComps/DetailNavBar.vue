<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles"
             :key="index" 
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.titles {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 12px;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top: 12px;
}
</style>