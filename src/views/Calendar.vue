<template>
  <div class="calendar">
    <calendar-component></calendar-component>
  </div>
</template>


<script>

import calendarComponent from "@/components/Calendar-component.vue";

export default {
  name: "calendar",
  components: {
    calendarComponent
  }
};
</script>
