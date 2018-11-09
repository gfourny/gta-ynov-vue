<template>
    <div class="LoginPage">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width:25%; margin-left: 38%">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="width:25%; margin-left: 38%">
            </div>
            <div class="form-group">
                <label for="statusPersonne">Votre status</label>
                <select class="form-control" style="width:25%; margin-left: 38%" v-model="status">
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

<script>
export default {
    name: "LoginPage",

    data: function() {
       return {
          email: '',
          password: '',
          status: ''
        }
    },

    methods:{
        SubmitButton: function(){
            this.$router.push('profil')
        }
    }
}
</script>

