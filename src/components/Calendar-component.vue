<template>
<div class="Agenda">
  <b-row class="justify-content-center">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="semaine"/>
  </b-row>

  <h3 class="mt-4">Semaine {{semaine}}</h3>
  <b-container>
    <b-form v-for="day in days" :key="day.id">
        <b-form-group :label="day"
                        label-for="day1input">

            <b-row class="justify-content-center">
              <b-col cols="4" md="2" >
              <b-form-input :v-model="'user.planning[semaine-1].day.crenau1'"
                            required>
              </b-form-input>
              </b-col>

              <b-col cols="4" md="2">
              <b-form-input type="text"
                            :v-model="'user.planning[semaine-1].day.crenau2'"
                            required>
              </b-form-input>
              </b-col>

              <b-col cols="4" md="1">
              <b-form-input type="number"
                            :v-model="'user.planning[semaine-1].day.pause'"
                            required>
              </b-form-input>
              </b-col>

              <b-col cols="12" md="3">
                
                  <b-form-radio-group 
                                buttons
                                button-variant="outline-primary"
                                size="md"
                                :v-model="'user.planning[semaine-1].day.abscence'"
                                :options="options" >
                  </b-form-radio-group>
              </b-col>

              <b-col>
                <input
                readonly
                :v-model="'{{user.planning[semaine-1].day.crenau2 - user.planning[semaine-1].day.crenau1 - user.planning[semaine-1].day.pause}}'"/>
              </b-col>
            </b-row>
          </b-form-group>
    </b-form>
    <b-button id="submitButton" type="submit" variant="primary" v-on:click="submit">Enregistrer</b-button>
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
    margin-top: 3%;
  }
}
</style>


<script>
export default {
  name: "Agenda",
  created: function() {
    console.log("profil created");
    this.user = this.$root.getLoggedUser();
    this.totalHeure = this.$root.countTotalHour(this.user, this.semaine - 1);
  },
  data() {
    return {
      user: {},
      totalHeure: "",
      semaine: 1,
      options: [
        { text: "Présent", value: "present" },
        { text: "CA", value: "CA" },
        { text: "RTT", value: "RTT" }
      ],
      days: ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]
    };
  },
  methods: {
    linkGen(pageNum) {
      return "#semaine/" + pageNum;
    },

    submit: function() {
      this.$root.saveUser(this.user);
      this.totalHeure = this.$root.countTotalHour(this.user, this.semaine - 1);
    }
  }
};
</script>