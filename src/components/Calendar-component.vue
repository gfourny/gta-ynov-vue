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
                <b-form-radio-group id="btnradiosLundi"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="lundiSelected"
                          :options="options"
                          name="radioBtnOutline"
                          class="typeJour" />
            </div>
            <div class="col-sm">
                Lundi après-midi
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
                Mardi matin
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
            <div class="col-sm">
                Mardi après-midi
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
                Mercredi matin
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
            <div class="col-sm">
                Mercredi après-midi
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
        <div class="row">
            <div class="col-sm">
                Jeudi matin
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
            <div class="col-sm">
                Jeudi après-midi
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
        <div class="row">
            <div class="col-sm">
                Vendredi matin
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
            <div class="col-sm">
                Vendredi après-midi
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


