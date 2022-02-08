const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course and Learn Vue!",
      courselGoalB: "Master Vue and build Amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courselGoalB;
      }
    },
  },
});

app.mount("#user-goal");
