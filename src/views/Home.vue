<template>
  <div id="root_div">
    <!--Navigation panel :start-->
    <div :class="mini ? 'not_move' : 'move'">
      <div class="">
        <template>
          <v-toolbar flat>
            <v-text-field
              flat
              hide-details
              label="Search..."
              prepend-inner-icon="mdi-magnify"
              solo-inverted
              light
              style="margin-right: 50px"
            ></v-text-field>

            <v-icon style="margin-right: 15px">mdi-bell</v-icon>

            <v-avatar style="margin-right: 15px">
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-avatar>
            <h2 style="margin-right: -5px">Shubham Kumar</h2>
            <v-icon class="ml-3">mdi-chevron-down</v-icon>
          </v-toolbar>
        </template>
      </div>
    </div>
    <template>
      <v-card>
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
              class="mt-5"
              v-for="item in items"
              :key="item.title"
              link
              @click="navigate(item)"
            >
              <v-list-item-icon>
                <v-icon :id="item.id">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content style="padding-left: 20px">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-navigation-drawer>
      </v-card>
    </template>
    <!--Navigation panel :end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Add Patient",
          icon: "mdi-account-plus",
          id: "mdi-account-plus1",
        },
        {
          title: "Add Doctor",
          icon: "mdi-account-plus",
          id: "mdi-account-plus2",
        },
        { title: "Overview", icon: "mdi-chart-pie", id: "mdi-chart-pie2" },
        { title: "Patient", icon: "mdi-account", id: "mdi-account3" },
        { title: "Department", icon: "mdi-home-city", id: "mdi-home-city4" },
        { title: "Doctor", icon: "mdi-doctor", id: "mdi-doctor5" },
        { title: "History", icon: "mdi-history", id: "mdi-history6" },
      ],
      mini: true,
    };
  },
  methods: {
    navigate(item) {
      this.items.forEach((ele) => {
        if (ele.id === item.id) {
          document.getElementById(ele.id).style.color = "rgb(138,43,226)";
        } else {
          document.getElementById(ele.id).style.color = "rgba(0,0,0,.54)";
        }
      });
    },
  },
};
</script>

<style scoped>
#root_div {
  padding-left: 45px;
}
.move {
  transform: translateX(210px);
  width: 80vw;
}
.not_move {
  transform: translateX(20px);
  width: 94vw;
}

@media(max-width:420px) {
  .move{
    
  }
  .not_move{
    width: 90vw !important;
  }
}
</style>

<style>
.v-sheet.v-toolbar {
  height: 53px !important;
  margin-left: -13px !important ;
}
.v-toolbar__content {
  height: 53px !important;
  margin-left: -20px !important;
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
</style>
