const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      showList: true,
    };
  },
  methods: {
    addTask(e) {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
    toggleShowList(e) {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
