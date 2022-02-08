const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmedName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "LastName";
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
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
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
