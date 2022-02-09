const app = Vue.createApp({
  data() {
    return {
      paragraphClass: {},
      inlineStyle: {},
    };
  },
  methods: {
    addParagraphClass(e) {
      this.paragraphClass[e.target.value] = true;
      e.target.value = "";
    },
    toggleParagraph() {
      if (this.paragraphClass.hidden) {
        this.paragraphClass.hidden = !this.paragraphClass.hidden;
      } else {
        this.paragraphClass.hidden = true;
      }
    },
    addInlineStyle(e) {
      this.inlineStyle["background-color"] = e.target.value;
      e.target.value = "";
    },
  },
});

app.mount("#assignment");
