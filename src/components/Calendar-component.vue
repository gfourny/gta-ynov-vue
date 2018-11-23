<template>
<div class="Agenda">
  <b-row class="justify-content-center">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="semaine"/>
  </b-row>

  <h3 class="mt-4">Semaine {{semaine}}</h3>
  <b-container>
  <b-form>
      <b-form-group label="Lundi:"
                    label-for="day1input">

        <b-row class="justify-content-center">
          <b-col cols="4" md="2" >
          <b-form-input placeholder="Matin"
                        type="number"
                        v-model="user.planning[semaine-1].lundi.crenau1"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="2">
          <b-form-input placeholder="Après-midi"
                        type="number"
                        v-model="user.planning[semaine-1].lundi.crenau2"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="1">
          <b-form-input placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[semaine-1].lundi.pause"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="12" md="3">
            
              <b-form-radio-group 
                            buttons
                            button-variant="outline-primary"
                            size="md"
                            v-model="user.planning[semaine-1].lundi.abscence"
                            :options="options" >
              </b-form-radio-group>
          </b-col>

          <b-col>
              <p>Heures effectives : {{user.planning[semaine-1].lundi.crenau2 - user.planning[semaine-1].lundi.crenau1 - user.planning[semaine-1].lundi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>


      <b-form-group label="Mardi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input placeholder="Matin"
                      type="number"
                      v-model="user.planning[semaine-1].mardi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[semaine-1].mardi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[semaine-1].mardi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">

            <b-form-radio-group 
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[semaine-1].mardi.abscence"
                          :options="options">
            </b-form-radio-group>
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[semaine-1].mardi.crenau2 - user.planning[semaine-1].mardi.crenau1 - user.planning[semaine-1].mardi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group label="Mercredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input placeholder="Matin"
                      type="number"
                      v-model="user.planning[semaine-1].mercredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[semaine-1].mercredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[semaine-1].mercredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group 
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[semaine-1].mercredi.abscence"
                          :options="options" >
            </b-form-radio-group>
        </b-col>
        <b-col>
            <p>Heures effectives : {{user.planning[semaine-1].mercredi.crenau2 - user.planning[semaine-1].mercredi.crenau1 - user.planning[semaine-1].mercredi.pause}}</p>
        </b-col>
        </b-row>
      </b-form-group>
      <b-form-group label="Jeudi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input placeholder="Matin"
                      type="number"
                      v-model="user.planning[semaine-1].jeudi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[semaine-1].jeudi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[semaine-1].jeudi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group 
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[semaine-1].jeudi.abscence"
                          :options="options" >
            </b-form-radio-group>
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[semaine-1].jeudi.crenau2 - user.planning[semaine-1].jeudi.crenau1 - user.planning[semaine-1].jeudi.pause}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group label="Vendredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input placeholder="Matin"
                      type="number"
                      v-model="user.planning[semaine-1].vendredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[semaine-1].vendredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[semaine-1].vendredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group 
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[semaine-1].vendredi.abscence"
                          :options="options" >
            </b-form-radio-group>
        </b-col>
        <b-col>
              <p>Heures effectives : {{user.planning[semaine-1].vendredi.crenau2 - user.planning[semaine-1].vendredi.crenau1 - user.planning[semaine-1].vendredi.pause}}</p>
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
      ]
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