const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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
    setName(e, lastname) {
      this.name = e.target.value + " " + lastname;
    },
  },
});

app.mount("#events");
