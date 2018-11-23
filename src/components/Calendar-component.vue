<template>
<div class="Agenda">
  <b-row class="justify-content-center">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage"/>
  </b-row>

  <h3 class="mt-4">Semaine {{currentPage}}</h3>
  <b-container>
  <b-form>
   
      <b-form-group id="day1inputgroup"
                    label="Lundi:"
                    label-for="day1input">

        <b-row class="justify-content-center">
          <b-col cols="4" md="2" >
          <b-form-input id="day1input"
                        placeholder="Matin"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.crenau1"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="2">
          <b-form-input id="day1input2"
                        placeholder="Après-midi"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.crenau2"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.pause"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="12" md="3">
            
              <b-form-radio-group id="btnradios2"
                            buttons
                            button-variant="outline-primary"
                            size="md"
                            v-model="user.planning[currentPage-1].lundi.abscence"
                            :options="options"
                            name="radioBtnOutline" />
          </b-col>

          <b-col>
              <p>Heures effectives : {{user.planning[currentPage-1].lundi.crenau2 - user.planning[currentPage-1].lundi.crenau1 - user.planning[currentPage-1].lundi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>


      <b-form-group id="day2inputgroup"
                    label="Mardi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day2input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].mardi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day2input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].mardi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].mardi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].mardi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[currentPage-1].mardi.crenau2 - user.planning[currentPage-1].mardi.crenau1 - user.planning[currentPage-1].mardi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day3inputgroup"
                    label="Mercredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day3input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].mercredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day3input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].mercredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].mercredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].mercredi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[currentPage-1].mercredi.crenau2 - user.planning[currentPage-1].mercredi.crenau1 - user.planning[currentPage-1].mercredi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Jeudi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].jeudi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].jeudi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].jeudi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].jeudi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[currentPage-1].jeudi.crenau2 - user.planning[currentPage-1].jeudi.crenau1 - user.planning[currentPage-1].jeudi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Vendredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].vendredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].vendredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].vendredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].vendredi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[currentPage-1].vendredi.crenau2 - user.planning[currentPage-1].vendredi.crenau1 - user.planning[currentPage-1].vendredi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
    
    <b-button id="submitButton" type="submit" variant="primary" v-on:click="submit">Enregistrer</b-button>
  </b-form>
  <b-row class="justify-content-center" id="resumeTypeNumber">
    
    <b-col>
      <p>CA disponnibles : {{user.conge.CA}}</p>   
    </b-col>
    <b-col>
      <p>RTT disponnibles : {{user.conge.RTT}}</p>
    </b-col>
  </b-row>
  </b-container>
  <b-form-group id="totalHeureGroup"
                    label="Nombre d'heure par semaine :"
                    label-for="totalHeure"
                    class="totalHeureGroup">
        <b-form-input id="totalHeure"
                      type="text"
                      v-model="totalHeure"
                      readonly
                      style="text-align: center">
        </b-form-input>
      </b-form-group>
</div>
</template>

<style>
.totalHeureGroup {
  width: 20%;
  margin-left: 40%;
  text-align: center;
}

#submitButton {
  margin-top: 3%;
}

@media screen and (max-width: 600px) {
  .totalHeureGroup {
    width: 80%;
    margin-left: 10%;
  }

  #btnradios2 {
    margin-top: 3%;
  }

  #submitButton {
    margin-top: 0%;
  }

  #resumeTypeNumber {
    margin-top: 3%
  }
}
</style>


<script>
export default {
  name: "Agenda",
  created: function() {
    console.log("profil created");
    this.user = this.$root.getLoggedUser();
    this.totalHeure = this.$root.countTotalHour(
      this.user,
      this.currentPage - 1
    );
  },
  data() {
    return {
      user: {},
      totalHeure: "",
      currentPage: 1,
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
    },

    submit: function() {
      this.$root.saveUser(this.user);
      this.totalHeure = this.$root.countTotalHour(
        this.user,
        this.currentPage - 1
      );
    }
  }
};
</script>