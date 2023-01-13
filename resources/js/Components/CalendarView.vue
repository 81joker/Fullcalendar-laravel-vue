
<template>
  <h1>Calendar Full</h1>
  <FullCalendar :options="calendarOptions" />
</template>

  <script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timeGrid";
import interactionPlugin from "@fullcalendar/interaction";
import toMoment from "@fullcalendar/moment";
import formatTime from "@fullcalendar/moment";


export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin,toMoment],
        initialView: "timeGridWeek",
        headerToolbar: {
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
          //   right: "dayGridMonth,dayGridList,dayGridWeek,listDay",
        },
        height: "auto",
        allDaySlot: false,
        slotMinTime: "12:00:00",
        slotMaxTime: "24:00:00",
        dateClick: this.handleDateClick,
      },
    };
  },
  methods: {
    handleDateClick: function(clickInfo) {
      this.$emit('dataClick',clickInfo )
      let date = toMoment(clickInfo);

    return date.format("YYYY-MM-DD HH:mm:ss ");
  }
  }
};
</script>
