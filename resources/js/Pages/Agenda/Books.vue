<template>
  <AppLayoutVue>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        BockssssXX
      </h2>
      <span>(****){{ $page.props.user }}</span>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <CalendarView @dataClick="dateClick" />
        </div>
      </div>
    </div>
    <modal-calendar
      v-if="showModal"
      :form="newEvent"
      @closeModal="closeModal"
      @saveAppt="saveAppt"
    />
  </AppLayoutVue>
</template>

<script>
import AppLayoutVue from "../../Layouts/AppLayout.vue";
import CalendarView from "../../Components/CalendarView.vue";
import ModalCalendar from "../../Components/Modal/ModalCalendar.vue"
import formatTime from "@fullcalendar/moment";


export default {
  name: "Books",
  components: {
    CalendarView,AppLayoutVue,ModalCalendar
  },
  data() {
    return {
      showModal:false,
      newEvent: {
        title:'',
        date_at:'',
        hour:'',
        user_id: '',
        session:1800
      }
    }
  },
  methods: {
    dateClick(arg){
      this.showModal = true


      console.log('Date info :' , arg);
      this.setOpenModal(arg)

    },
    closeModal(){
      this.showModal = false
    },
    setOpenModal(obj){
      const dateAndTim = obj.dateStr.split('T')
      this.newEvent.date_at =dateAndTim[0]
      this.newEvent.hour =dateAndTim[1].substr(0,8)
      this.newEvent.user_id =this.$page.props.user.id


      return
    },
    saveAppt(param){
      if (param.title === '') {
        alert('You cannot leave the reason field empty')
      }

    //   Set a variable
      let dataAppt = this.setDurationSesion(param)
      console.info(dataAppt)
    },
    setDurationSesion(form){
      let dateApt = form.date_at + ' ' + form.hour
      let initSesion = new Date(dateApt)
    //   console.info(initSesion.getMonth())
    let getSecondsSesion = initSesion.getSeconds() + form.session
        initSesion.setSeconds(getSecondsSesion)
        //   console.info('this dateAppt' +initSesion)

          return {
            id: form.id,
            title: form.title,
            start: dateApt,
            end: eventTimeFormat(initSesion),
            // lost period
            session:form.session,
            user_id : form.user_id

          }
    }
  },
};
</script>

<style>
</style>
