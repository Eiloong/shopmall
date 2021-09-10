<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <span>用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="info-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="" class="img" />
      <span class="title">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <div class="content">{{ commentInfo.content }}</div>
      <div class="parameter">
        <span class="time">{{ commentInfo.created | conversionFormat }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-img" v-if="commentInfo.images">
      <img :src="item" alt="" v-for="item in commentInfo.images" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    conversionFormat(created) {
      const date = new Date(created * 1000);
      const y = date.getFullYear();
      const m =
        date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth();
      const d = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
      return [y, m, d].join("-");
    },
  },
};
</script>
<style lang="less" scoped>
.detail-comment-info {
  padding: 0 10px;
  border-bottom: 5px solid #eaeaea;
  font-size: 15px;
  .info-header {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 1px solid #eaeaea;
    color: #222222;
    .more {
      position: relative;
      padding-right: 20px;
      &::after {
        content: "";
        position: absolute;
        top: 3px;
        right: 3px;
        width: 10px;
        height: 10px;
        border-top: 2px solid #cccccc;
        border-left: 2px solid #cccccc;
        transform: rotate(135deg);
      }
    }
  }
  .info-user {
    color: #222222;
    margin: 10px 0;
    .img {
      width: 40px;
      border-radius: 50%;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
  .info-detail {
    .content {
      color: #777777;
      font-size: 14px;
    }
    .parameter {
      margin: 10px 0;
      color: #999999;
      font-size: 12px;
      .time {
        margin-right: 20px;
      }
    }
  }
  .info-img {
    margin-bottom: 20px;
    img {
      width: 80px;
      height: 80px;
      margin-right: 5px;
    }
  }
}
</style>