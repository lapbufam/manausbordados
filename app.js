const app = new Vue({
  el: "#app",
  data: {
    title: "Leonardo Barreto",
    showTitle: true,
    items: [],
    username: "lapbufam",
  },
  mounted: async function () {
    await this.getRepos();
  },
  methods: {
    getRepos: async function () {
      const response = await fetch(
        `https://api.github.com/users/${this.username}/repos`
      );
      const data = await response.json();
      this.items = [...data];
    },
  },
});
