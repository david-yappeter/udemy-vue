const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(val) {
      if (val) {
        this.counter += val;
      } else {
        this.counter++;
      }
    },
    reduceCounter(val) {
      if (val) {
        this.counter -= val;
      } else {
        this.counter--;
      }
    },
  },
});

app.mount("#events");
