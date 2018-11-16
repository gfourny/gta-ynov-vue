<template>
    <div class="Agenda">
        <div class="semaine">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage" class="semaineSelected"/>
        </div>
        <div class="row">
            <div class="col-sm">
                <b-input-group class="jour" size="lg" prepend="Lundi" append="heures">
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosLundi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="lundiSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <b-input-group class="jour" size="lg" prepend="Mardi" append="heures">
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMardi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mardiSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <b-input-group class="jour" size="lg" prepend="Mercredi" append="heures">
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMercredi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mercrediSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <b-input-group class="jour" size="lg" prepend="Jeudi" append="heures">
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosJeudi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="jeudiSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <b-input-group class="jour" size="lg" prepend="Vendredi" append="heures">
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosVendredi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="vendrediSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <b-button class="submitButton" type="submit" variant="primary">Enregistrer</b-button>
    </div>
</template>

<style scoped >
.jour {
  width: 50%;
  margin-left: 20%;
  margin-top: 3%;
}

.typeJour {
  margin-left: 12px;
  margin-top: 3%;
}

.semaineSelected {
    margin-left: 38%
}

@media screen and (max-width: 600px) {
  .jour {
    width: 90%;
    margin-left:4%
  }

  .typeJour {
    margin-top: 3%;
  }

  .submitButton {
      margin-top: 3%
  }

  .semaineSelected {
    margin-left: 18%
}
}
</style>

<script>
export default {
  name: "Agenda",
  data() {
    return {
      show: true,
      currentPage: 45,
      lundiSelected: "present",
      mardiSelected:"present",
      mercrediSelected:"present",
      jeudiSelected:"present",
      vendrediSelected:"present",
      options: [
        { text: "Présent", value: "present" },
        { text: "CA", value: "CA" },
        { text: "RTT", value: "RTT" }
      ]
    };
  },
  methods: {
    linkGen(pageNum) {
      return "#semaine/" + pageNum;
    }
  }
};
</script>


