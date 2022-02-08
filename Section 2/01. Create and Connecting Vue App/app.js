const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course and Learn Vue!",
      courselGoalB: "<h5>Master Vue and build Amazing apps!</h5>",
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
