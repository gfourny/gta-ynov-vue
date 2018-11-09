<template>
  <div class="agenda">
      <calendar
                :first-day="1"
                :all-events="events">
     </calendar>
  </div>
</template>

<style>
.panel-default{
    width: 90%;
    margin-left: 5%;
}
.panel-heading{
    display: none;
}

.form-group{
    display: none;
}
</style>


<script>
import Vue from "vue";
import { Calendar } from "vue-bootstrap-calendar";
import VueI18n from "vue-i18n";
import { messages } from "vue-bootstrap-calendar";

Vue.use(VueI18n);

window.i18n = new VueI18n({
  locale: "en",
  messages
});

export default {
  name: "agenda",
  i18n,
  data() {
    return {
      events: []
    };
  },
  components: {
    Calendar
  },
  mounted() {
    let me = this;
    setTimeout(function() {
      me.events = [
        // you can make ajax call here
        {
          id: 1,
          title: "Event 1",
          color: "panel-danger",
          date: new Date()
        }
      ];
    }, 1000);
  }
};
</script>
