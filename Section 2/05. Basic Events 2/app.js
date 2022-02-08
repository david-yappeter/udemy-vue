const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    addCounter(e, val) {
      if (val) {
        this.counter += val;
      } else {
        this.counter++;
      }
    },
    reduceCounter(e, val) {
      if (val) {
        this.counter -= val;
      } else {
        this.counter--;
      }
    },
    submitForm() {
      alert("Submitted");
    },
    outputName() {
      if (this.name === "") return "";
      return this.name + " " + lastName;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullname() {
      if (this.name === "") return "";
      return this.name + " " + "LastName";
    },
  },
});

app.mount("#events");
