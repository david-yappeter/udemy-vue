const app = Vue.createApp({
  data() {
    return {
      myName: "Lorem Ipsum",
      myAge: 5,
      imageUrl: "https://picsum.photos/800/600",
      inputVal: "",
    };
  },
  methods: {
    randomNum() {
      return Math.floor(Math.random() * 2);
    },
  },
});

app.mount("#assignment");
