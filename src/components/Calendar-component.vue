<template>
    <div class="Agenda">
        <div class="semaine">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage" class="semaineSelected"/>
        </div>
        <div class="row">
            <div class="col-sm">
               Lundi matin
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosLundiAM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="lundiAMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Lundi après-midi
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosLundiPM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="lundiPMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                Mardi matin
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMardiAM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mardiAMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Mardi après-midi
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMardiPM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mardiPMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                Mercredi matin
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMercrediAM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mercrediAMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Mercredi après-midi
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosMercrediPM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="mercrediPMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                Jeudi matin
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosJeudiAM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="jeudiAMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Jeudi après-midi
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosJeudiPM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="jeudiPMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                Vendredi matin
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosVendrediAM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="vendrediAMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Vendredi après-midi
            </div>
            <div class="col-sm">
                <b-form-radio-group id="btnradiosVendrediPM"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="vendrediPMSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
        </div>
        <br/>
        <b-button class="submitButton" type="submit" variant="primary">Enregistrer</b-button>
    </div>
</template>

<style scoped >
.typeJour {
  margin-left: 1px;
  margin-top: 3%;
}

.semaineSelected {
    margin-left: 38%
}

.row {
    margin-top: 3%;
}

@media screen and (max-width: 600px) {

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
      lundiAMSelected: "present",
      lundiPMSelected: "present",
      mardiAMSelected:"present",
      mardiPMSelected:"present",
      mercrediAMSelected:"present",
      mercrediPMSelected:"present",
      jeudiAMSelected:"present",
      jeudiPMSelected:"present",
      vendrediAMSelected:"present",
      vendrediPMSelected:"present",
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


