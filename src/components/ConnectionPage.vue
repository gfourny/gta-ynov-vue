<template>
    <div class="LoginPage">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="statusPersonne">Votre status</label>
                <select class="form-control" v-model="status">
                        <option disabled value="">Status</option>
                        <option>Salarié</option>
                        <option>Responsable d’équipe</option>
                        <option>DRH</option>
                </select>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" v-on:click="SubmitButton">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.form-group {
  display: inherit;
  width: 25%;
  margin-left: 38%;
}

@media screen and (max-width: 600px) {
  .form-group {
    display: inherit;
    width: 80%;
    margin-left: 9%;
  }
}
</style>


<script>
export default {
  name: "LoginPage",

  data: function() {
    return {
      email: "",
      password: "",
      status: "",
      hadLoginError: false
    };
  },

  methods: {
    SubmitButton: function(event) {
      console.log(this.email + "/" + this.password);
      let user = this.$root.login(this.email, this.password);
      if (user == undefined) {
        this.hadLoginError = true;
      } else {
        console.log("utilisateur connecté");
        this.$root.user = user;
        this.$root.isLoggin = true;
        this.$router.push("profil");
      }
    }
  }
};
</script>

