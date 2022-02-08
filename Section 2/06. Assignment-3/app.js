const app = Vue.createApp({
  data() {
    return {
      num: 0,
      msg: "",
      timer: null,
    };
  },
  methods: {
    addNum(e, val) {
      this.num += val;
    },
  },
  watch: {
    num: {
      immediate: true,
      handler(val) {
        console.log(this.timer);
        if (val == 37) {
          this.msg = "Correct!";
        } else if (val > 37) {
          if (!this.timer) {
            this.timer = setTimeout(() => {
              this.num = 0;
              this.timer = null;
            }, 5000);
          }
          this.msg = "Too Much!";
        } else if (val < 37) {
          this.msg = "Not there yet";
        }
      },
    },
  },
});

app.mount("#assignment");
