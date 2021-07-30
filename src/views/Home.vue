<template>
  <div id="root_div">
    <!--main div :start-->
    <div :class="mini ? 'not_move' : 'move'">
      <!--top bar :start-->
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
          style="position: absolute; top: 56px; right: 5px"
          class="mx-auto"
          min-width="170"
          tile
        >
          <v-list shaped>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item
                @click="dropdown = !dropdown"
                v-for="(item, i) in items"
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
              @click="navigate(item)"
            >
              <v-list-item-icon>
                <v-icon :id="item.id">{{ item.icon }}</v-icon>
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
export default {
  data() {
    return {
      drawer: true,
      reveal: false,
      items: [
        {
          title: "Add Patient",
          icon: "mdi-book-plus",
          id: "mdi-book-plus1",
          color: "cyan",
        },
        {
          title: "Add Doctor",
          icon: "mdi-briefcase-plus",
          id: "mdi-briefcase-plus2",
          color: "cyan",
        },
        {
          title: "Overview",
          icon: "mdi-chart-pie",
          id: "mdi-chart-pie2",
          color: "cyan",
        },
        {
          title: "Patient",
          icon: "mdi-account",
          id: "mdi-account3",
          color: "cyan",
        },
        {
          title: "Department",
          icon: "mdi-home-city",
          id: "mdi-home-city4",
          color: "cyan",
        },
        {
          title: "Doctor",
          icon: "mdi-doctor",
          id: "mdi-doctor5",
          color: "cyan",
        },
        {
          title: "History",
          icon: "mdi-history",
          id: "mdi-history6",
          color: "cyan",
        },
      ],
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },
  methods: {
    navigate(item) {
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

@media (max-width: 420px) {
  .move {
  }
  .not_move {
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
