<template>
    <div class="Profil">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="emailForm"
                    label="addresse email"
                    label-for="emailForm">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="$root.email"
                      required
                      placeholder="email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="prenomForm"
                    label="Prénom"
                    label-for="prenomForm">
        <b-form-input id="prenomInput"
                      type="text"
                      v-model="$root.prenom"
                      required
                      placeholder="Entrer votre prénom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="nomForm"
                    label="Nom"
                    label-for="nomForm">
        <b-form-input id="nomInput"
                      type="text"
                      v-model="$root.nom"
                      required
                      placeholder="Entrer votre nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="adresseForm"
                    label="Adresse"
                    label-for="adresseForm">
        <b-form-input id="adresseInput"
                      type="text"
                      v-model="$root.adresse"
                      required
                      placeholder="Entrer votre adresse">
        </b-form-input>
      </b-form-group>
      <b-form-group id="naissanceForm"
                    label="Date de naissance"
                    label-for="naissanceForm">
      <b-form-input class="form-control"
                    type="date"
                    value="2011-08-19"
                    id="example-date-input">
      </b-form-input>
      </b-form-group>
      <b-form-group id="statusForm"
                    label="Status"
                    label-for="Status">
          <b-form-input readonly id="status"
                        type="text"
                        v-model="$root.status">
          </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Valider</b-button>
      <b-button type="reset" variant="danger">Effacer</b-button>
    </b-form>
    </div>
</template>

<style scoped>
.b-form-group {
  display: inherit;
  width: 25%;
  margin-left: 38%;
}

@media screen and (max-width: 600px) {
  .b-form-group {
    display: inherit;
    width: 80%;
    margin-left: 9%;
  }
}
</style>



<script>
export default {
  name: "Profil",
  data() {
    return {
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push("calendar");
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.prenom = "";
      this.form.adresse = "";
      this.form.nom = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

