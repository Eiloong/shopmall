import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    handleBackTop() {
      this.$refs.scroll.scrollTo()
    },
  },
}