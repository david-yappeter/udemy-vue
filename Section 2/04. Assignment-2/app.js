const app = Vue.createApp({
  data() {
    return {
      keyDownVal: "",
      enteredVal: "",
      confirmedVal: "",
    };
  },
  methods: {
    showAlert() {
      alert("Show Alert");
    },
    keyDown(e) {
      this.keyDownVal = e.target.value;
    },
    enteredKeyDown(e) {
      this.enteredVal = e.target.value;
    },
    enterVal() {
      this.confirmedVal = this.enteredVal;
    },
  },
});

app.mount("#assignment");
