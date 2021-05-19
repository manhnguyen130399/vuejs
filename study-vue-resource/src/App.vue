<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <h1 class="text-center">Vue Resource</h1>
          <div class="form-group">
            <label for="">Username</label>
            <input class="form-control" type="text" v-model="user.username" />
            <label for="">Email</label>
            <input class="form-control" type="text" v-model="user.email" />
            <button @click="submit" class="btn btn-primary">Submit</button>
          </div>
          <br />
          <input type="text" v-model="node" class="form-control" />
          <br />
          <button class="btn btn-warning" @click="getUsers">Get all</button>
          <br />
          <ul class="list-group">
            <li class="list-group-item" v-for="u in users" :key="u.email">
              {{ u.username }} - {{ u.email }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      resources: {},
      node: "data",
    };
  },
  methods: {
    submit() {
      // this.$http.post("", this.user).then(
      //   (response) => {
      //     console.log(response);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
      this.resources.createItem(this.user);
    },
    getUsers() {
      // this.$http
      //   .get("" + "data.json")
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     for (const key in data) {
      //       this.users.push(data[key]);
      //     }
      //   });

      this.resources
        .getNodeData({ node: this.node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (const key in data) {
            this.users.push(data[key]);
          }
        });
    },
  },
  created() {
    const customActions = {
      createItem: {
        method: "POST",
        url: "user.json",
      },
      getNodeData: {
        method: "GET",
      },
    };
    this.resources = this.$resource("{node}.json", {}, customActions);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
