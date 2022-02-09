const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: "",
    };
  },
  methods: {
    addGoal(e) {
      if (this.enteredGoal === "") return;
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
  },
});

app.mount("#user-goals");
