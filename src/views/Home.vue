<template>
  <div id="root_div">
    <!--main div :start-->
    <div
      elevation="0"
      :class="mini ? 'not_move' : 'move'"
      style="background-color: rgba(192, 192, 192, 0.2)"
    >
      <!--top bar :start-->
      <template>
        <v-toolbar elevation="0" flat style="z-index: 9">
          <v-text-field
            @keyup="filterList"
            flat
            hide-details
            label="Search..."
            prepend-inner-icon="mdi-magnify"
            solo-inverted
            light
            style="margin-right: 50px; margin-left: -25px"
          ></v-text-field>

          <v-icon style="margin-right: 15px">mdi-bell</v-icon>

          <v-avatar style="margin-right: 15px">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-avatar>
          <h2 style="margin-right: -5px">Shubham Kumar</h2>
          <v-icon class="ml-3" @click="dropdown = !dropdown">{{
            dropdown ? "mdi-chevron-down" : "mdi-chevron-up"
          }}</v-icon>
        </v-toolbar>
      </template>
      <!--top bar :end-->

      <!--dropdown panel :start-->
      <template>
        <v-card
          v-if="dropdown"
          style="position: absolute; top: 56px; right: 5px; z-index: 999"
          class="mx-auto"
          min-width="170"
          tile
        >
          <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item
                @click="dropdown = !dropdown"
                v-for="(item, i) in droplist"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="pl-2">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </template>
      <!--dropdown panel :end-->

      <!--search panel :start-->
      <template>
        <v-card
          elevation="1"
          v-if="show_search_list"
          style="
            position: absolute;
            top: 56px;
            left: 0px;
            z-index: 999;
            overflow-y: auto;
          "
          class="mx-auto"
          min-width="650"
          max-height="220"
        >
          <v-list style="background: rgb(236, 240, 241)">
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in updated_search_list"
                :key="i"
                elevation="1"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="pl-2"
                    @click="goToNav(item.item_index)"
                    >{{ item.title }}
                    <span class="float-right text-sm italic mr-2">{{
                      item.last
                    }}</span></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </template>
      <!--search panel :end-->

      <Overview v-if="overview" :drawer_state="mini" />
      <AddPatient v-if="add_patient" />
      <AddDoctor v-if="add_doctor" />
      <Patient v-if="patient" :drawer_state="mini" />
      <Department v-if="department" :drawer_state="mini" />
      <Doctor v-if="doctor" :drawer_state="mini" />
    </div>
    <!--main div :end-->

    <!--Navigation panel :start-->
    <template>
      <v-card style="overflow: hidden">
        <v-navigation-drawer
          app
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
        >
          <v-list-item class="-ml-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/15.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-title class="font-bold pl-4">H-Care</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              class="mt-1 mb-3"
              v-for="item in items"
              :key="item.title"
              link
              @click.stop="mini = true"
              @click="navigate(item)"
            >
              <v-list-item-icon>
                <v-icon class="side_nav_icon" :id="item.id">{{
                  item.icon
                }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content
                style="padding-left: 20px; color: rgba(0, 0, 0, 0.54)"
              >
                <v-list-item-title :id="item.id + 'text'">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list-item-title
            v-if="mini"
            class="pl-2 pb-3"
            style="padding-top: 97px"
            id="google_play"
          >
            <v-btn fab small>
              <v-icon dark> mdi-google-play </v-icon>
            </v-btn>
          </v-list-item-title>
          <v-list-item-title v-if="mini" class="pt-3 pl-2 pb-3">
            <v-btn fab small>
              <v-icon dark> mdi-apple </v-icon>
            </v-btn>
          </v-list-item-title>

          <template v-if="!mini">
            <v-card class="mx-auto" min-height="215" max-width="344">
              <v-card-text>
                <div class="text-black">
                  <v-icon>mdi-star-shooting</v-icon>
                  <span class="font-bold pl-2">World's best health care</span>
                </div>
                <p class="text-center -ml-2">Get mobile app</p>
                <br />

                <div class="text-center -ml-4">
                  <v-btn class="mx-2" fab small>
                    <v-icon dark> mdi-google-play </v-icon>
                  </v-btn>

                  <v-btn class="mx-2" fab small>
                    <v-icon dark> mdi-apple </v-icon>
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="teal accent-4"
                  class="ml-14"
                  @click="reveal = true"
                >
                  Learn More
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">Hi hahahah</p>
                    <p>Back text</p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="reveal = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </template>
        </v-navigation-drawer>
      </v-card>
    </template>
    <!--Navigation panel :end-->
  </div>
</template>

<script>
import gsap from "gsap";
import Overview from "@/components/Overview.vue";
import AddPatient from "@/components/AddPatient.vue";
import AddDoctor from "@/components/AddDoctor.vue";
import Patient from "@/components/Patient.vue";
import Department from "@/components/Department.vue";
import Doctor from "@/components/Doctor.vue";
export default {
  components: {
    Overview,
    AddPatient,
    AddDoctor,
    Patient,
    Department,
    Doctor,
  },

  data() {
    return {
      drawer: true,
      reveal: false,

      overview: true,
      patient: false,
      add_patient: false,
      add_doctor: false,
      department: false,
      doctor: false,

      items: [
        {
          title: "Overview",
          icon: "mdi-chart-pie",
          id: "mdi-chart-pie2",
          color: "darkorange",
        },
        {
          title: "Add Patient",
          icon: "mdi-book-plus",
          id: "mdi-book-plus1",
          color: "purple",
        },
        {
          title: "Add Doctor",
          icon: "mdi-briefcase-plus",
          id: "mdi-briefcase-plus2",
          color: "cyan",
        },
        {
          title: "Patient",
          icon: "mdi-account",
          id: "mdi-account3",
          color: "red",
        },
        {
          title: "Department",
          icon: "mdi-home-city",
          id: "mdi-home-city4",
          color: "green",
        },
        {
          title: "Doctor",
          icon: "mdi-doctor",
          id: "mdi-doctor5",
          color: "sienna",
        },
      ],
      droplist: [
        {
          title: "Account",
          icon: "mdi-account",
          id: "menu",
        },
        {
          title: "Logout",
          icon: "mdi-login",
          id: "menu-history6",
        },
      ],
      search_list: [
        {
          title: "Add Patients",
          icon: "mdi-account-clock",
          id: "menu-account-0",
          last: "Form for adding patients details",
          item_index: 1,
        },
        {
          title: "Add Doctor",
          icon: "mdi-hospital-box",
          id: "menu-hospital-0",
          last: "Form for adding doctor details",
          item_index: 2,
        },
        {
          title: "Patients by Gender",
          icon: "mdi-gender-male-female",
          id: "menu-gen",
          last: "Number of male and female patients",
          item_index: 3,
        },
        {
          title: "Patients by Disease",
          icon: "mdi-alert",
          id: "menu-alert6",
          last: "Number of patients on basis of disease",
          item_index: 3,
        },
        {
          title: "Patients by Division",
          icon: "mdi-vector-intersection",
          id: "menu-vector-intersection",
          last: "Number of patients on basis of division",
          item_index: 3,
        },
        {
          title: "Patients admit trend",
          icon: "mdi-chart-bar",
          id: "menu-chart-bar",
          last: "Visual representation of trend",
          item_index: 3,
        },
        {
          title: "Doctors in departments",
          icon: "mdi-doctor",
          id: "menu-doctor-0",
          last: "Number of doctors on basis of departments",
          item_index: 4,
        },
        {
          title: "Doctor patient trend",
          icon: "mdi-chart-scatter-plot",
          id: "menu-chart-scatter-plot",
          last: "Visual representation of trend",
          item_index: 4,
        },
        {
          title: "Types of Departments",
          icon: "mdi-human-queue",
          id: "menu-human-queue",
          last: "Different department avail. in hospital",
          item_index: 4,
        },
        {
          title: "Doctors by Division",
          icon: "mdi-login",
          id: "menu-history6",
          last: "Number of doctors on basis of division",
          item_index: 5,
        },
        {
          title: "Avg Doctor salary per Dept.",
          icon: "mdi-cash-multiple",
          id: "menu-cash-multiple",
          last: "Doctor's salaries",
          item_index: 5,
        },
        {
          title: "Avg Doctor Rating",
          icon: "mdi-star-circle",
          id: "menu-star-circle",
          last: "Doctor's rating",
          item_index: 5,
        },
      ],
      updated_search_list: [],
      show_search_list: false,
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },
  methods: {
    goToNav(index) {
      this.navigate(this.items[index]);
      this.updated_search_list = [];
      this.show_search_list = false;
    },
    filterList(e) {
      if (e.target.value.replace(/\s+/g, "") !== "") {
        this.updated_search_list = [];
        this.show_search_list = true;
        this.search_list.forEach((ele) => {
          if (
            ele.title
              .replace(/\s+/g, "")
              .toLowerCase()
              .includes(e.target.value.replace(/\s+/g, "").toLowerCase())
          ) {
            this.updated_search_list.push(ele);
          }
        });
      } else {
        this.updated_search_list = [];
        this.show_search_list = false;
      }
    },
    hideAll() {
      this.overview = false;
      this.add_patient = false;
      this.add_doctor = false;
      this.patient = false;
      this.department = false;
      this.doctor = false;
    },
    navigate(item) {
      this.hideAll();

      if (item.title === "Overview") this.overview = true;
      else if (item.title === "Add Patient") this.add_patient = true;
      else if (item.title === "Add Doctor") this.add_doctor = true;
      else if (item.title === "Patient") this.patient = true;
      else if (item.title === "Department") this.department = true;
      else if (item.title === "Doctor") this.doctor = true;

      this.items.forEach((ele) => {
        if (ele.id === item.id) {
          document.getElementById(ele.id).style.color = item.color;
          document.getElementById(ele.id + "text").style.color = "black";
          document.getElementById(ele.id + "text").style.fontWeight = "bold";
        } else {
          document.getElementById(ele.id).style.color = "rgba(0,0,0,.54)";
          document.getElementById(ele.id + "text").style.color =
            "rgba(0,0,0,.54)";
          document.getElementById(ele.id + "text").style.fontWeight = "500";
        }
      });
    },
  },

  mounted() {
    let tl = gsap.timeline();
    tl.fromTo(
      ".side_nav_icon",
      {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "Expo.easeOut",
        stagger: 0.1,
      }
    );

    this.navigate(this.items[0]);
  },
};
</script>

<style scoped>
#root_div {
  padding-left: 36px;
  padding-right: 0;
}
.move {
  transform: translateX(210px);
  width: 82vw;
  transition: all ease 0.2s;
}
.not_move {
  transform: translateX(20px);
  width: 95.5vw;
  transition: all ease 0.2s;
}
.side_nav_icon {
  opacity: 0;
}
@media (max-width: 420px) {
  .not_move {
    width: 90vw !important;
  }
}
</style>

<style>
.v-sheet.v-toolbar {
  height: 56.2px !important;
}
.v-toolbar__content {
  height: 56.2px !important;
}
.theme--light.v-text-field--solo-inverted > .v-input__control > .v-input__slot {
  background: transparent !important;
  color: black;
}
.theme--light.v-text-field--solo-inverted.v-input--is-focused
  > .v-input__control
  > .v-input__slot
  input {
  color: black;
}
.v-input__icon.v-input__icon--prepend-inner {
  margin-left: 15px;
  margin-right: 10px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-navigation-drawer__content {
  overflow-y: hidden;
}
#google_play {
  padding-top: 80px !important;
}
</style>
