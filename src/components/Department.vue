<template>
  <div>
    <!---parent div start-->
    <div class="grid lg:grid-cols-4" id="upper_div">
      <!--col1 :start-->
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Cardiology Department</h1>
            </div>
            <canvas
              class="-ml-7"
              height="300px"
              width="290px"
              id="top_cardio_doughnut"
            ></canvas>
            <v-icon
              class="top_icon"
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-heart-pulse" }}</v-icon
            >
          </div>
        </div>
      </div>
      <!--col1 :end-->
      <!--col2 :start-->
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Neurology Department</h1>
            </div>
            <canvas
              class="-ml-7"
              height="300px"
              width="290px"
              id="top_neuro_doughnut"
            ></canvas>
            <v-icon
              class="top_icon"
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-brain" }}</v-icon
            >
          </div>
        </div>
      </div>
      <!--col2 :end-->
      <!--col3 :start-->
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Rehabilitation Department</h1>
            </div>
            <canvas
              class="-ml-7"
              height="300px"
              width="290px"
              id="top_rehab_doughnut"
            ></canvas>
            <v-icon
              class="top_icon"
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-needle" }}</v-icon
            >
          </div>
        </div>
      </div>
      <!--col3 :end-->
      <!--col4 :start-->
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Radiology Department</h1>
            </div>
            <canvas
              class="-ml-7"
              height="300px"
              width="290px"
              id="top_radio_doughnut"
            ></canvas>
            <v-icon
              class="top_icon"
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-radioactive" }}</v-icon
            >
          </div>
        </div>
      </div>
      <!--col4 :end-->
    </div>
    <!-----parent div ends-->

    <!---second row :start-->
    <div class="grid lg:grid-cols-4">
      <!--polar chart :start-->
      <div class="p-6 last_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Doctors in departments</h1>
            </div>
            <canvas
              class="-ml-9"
              height="300px"
              width="290px"
              id="polar_doctors"
            ></canvas>
          </div>
        </div>
      </div>
      <!--polar chart :end-->
      <div id="bar_chart_div" class="col-start-2 col-span-2 p-6">
        <!-- bar :start-->
        <div
          class="bg-white p-6 shadow-lg flex last_row"
          style="border-radius: 7px"
        >
          <canvas height="350px" width="570px" id="bar" class="mr-5"></canvas>
        </div>
        <!-- bar :end-->
      </div>
      <!--Type of dept :start-->
      <div class="p-6 last_row">
        <div class="bg-white shadow-lg h-full" style="border-radius: 7px">
          <div class="flex">
            <h2 class="font-bold p-6">Types of Departments</h2>
          </div>
          <v-divider></v-divider>
          <div style="color: #d3d3d3" class="pl-4 pt-4 pb-4 flex">
            <div>
              <v-icon style="color: #d3d3d3">mdi-home</v-icon>
            </div>
            <div>
              <h2 class="pl-2 pt-1">SECTION</h2>
            </div>
            <div>
              <h2 id="pt" class="ml-6 pl-11 mt-1">ACTIVE ON</h2>
            </div>
          </div>
          <v-divider></v-divider>
          <div
            id="division"
            style="height: 250px; max-height: 250px; overflow-y: scroll"
          >
            <v-list-item v-for="item in items" :key="item.id">
              <v-list-item-icon>
                <v-icon style="color: grey">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-2" style="color: grey"
                  >{{ item.title }}
                  <span style="float: right; color: black">{{
                    item.status
                  }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </div>
      <!--Type of dept :end-->
    </div>
    <!---second row :end-->
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import gsap from "gsap";
export default {
  props: ["drawer_state"],
  data() {
    return {
      items: [
        {
          title: "Cardiology",
          icon: "mdi-heart-pulse",
          id: "mdi-heart-pulse1",
          status: "Mon Fri Sat",
        },

        {
          title: "Neurology",
          icon: "mdi-brain",
          id: "mdi-heart-pulse2",
          status: "Fri Sat",
        },
        {
          title: "Surgery",
          icon: "mdi-content-cut",
          id: "mdi-content-cut3",
          status: "Mon Wed Sat",
        },
        {
          title: "Radiology",
          icon: "mdi-radioactive",
          id: "mdi-radiology-box4",
          status: "Mon Tue Wed",
        },
        {
          title: "Dietary",
          icon: "mdi-food-croissant",
          id: "mdi-food-croissant4",
          status: "Thu Fri Sat",
        },
      ],
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },
  methods: {
    topCardioDoughnut() {
      const labels = [
        "Active patients per Month",
        "Discharged patients per Month",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["rgba(128,0,128,0.8)", "rgba(0,255,255,0.8)"],
            borderColor: ["rgba(128,0,128,1)", "rgba(0,255,255,1)"],
            hoverBackgroundColor: ["rgba(128,0,128,1)", "rgba(0,255,255,1)"],
            hoverBorderColor: ["black", "black"],
            data: [50, 40],
          },
        ],
      };
      const config = {
        type: "doughnut",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                padding: 40,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("top_cardio_doughnut"), config);
    },

    topNeuroDoughnut() {
      const labels = [
        "Active patients per Month",
        "Discharged patients per Month",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["rgba(255,0,0,0.8)", "rgba(0,255,0,0.8)"],
            borderColor: ["rgba(255,0,0,1)", "rgba(0,255,0,1)"],
            hoverBackgroundColor: ["rgba(255,0,0,1)", "rgba(0,255,0,1)"],
            hoverBorderColor: ["black", "black"],
            data: [10, 40],
          },
        ],
      };
      const config = {
        type: "doughnut",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                padding: 40,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("top_neuro_doughnut"), config);
    },

    topRehabDoughnut() {
      const labels = [
        "Active patients per Month",
        "Discharged patients per Month",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["rgba(0,0,0,0.8)", "rgba(9, 207, 247 ,0.8)"],
            borderColor: ["rgba(0,0,0,1)", "rgba(9, 207, 247  ,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)", "rgba(9, 207, 247 ,1)"],
            hoverBorderColor: ["black", "black"],
            data: [40, 40],
          },
        ],
      };
      const config = {
        type: "doughnut",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                padding: 40,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("top_rehab_doughnut"), config);
    },

    topRadioDoughnut() {
      const labels = [
        "Active patients per Month",
        "Discharged patients per Month",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: [
              "rgba(9, 81, 247 ,0.8)",
              "rgba(194, 21, 233 ,0.8)",
            ],
            borderColor: ["rgba(9, 81, 247  ,1)", "rgba(194, 21, 233 ,1)"],
            hoverBackgroundColor: [
              "rgba(9, 81, 247  ,1)",
              "rgba(194, 21, 233 ,1)",
            ],
            hoverBorderColor: ["black", "black"],
            data: [20, 40],
          },
        ],
      };
      const config = {
        type: "doughnut",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                padding: 40,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("top_radio_doughnut"), config);
    },

    polarDoctorsChart() {
      const labels = ["Cardiology", "Neurology", "Radiology", "Rehabilitation"];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: [
              "rgba(255, 99, 132,0.8)",
              "rgba(75, 192, 192,0.8)",
              "rgba(255, 205, 86,0.8)",
              "rgba(201, 203, 207,0.8)",
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132,1)",
              "rgba(75, 192, 192,1)",
              "rgba(255, 205, 86,1)",
              "rgba(201, 203, 207,1)",
            ],
            hoverBorderColor: ["black", "black"],
            data: [20, 40, 10, 15],
          },
        ],
      };
      const config = {
        type: "polarArea",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "bottom",
              align: "start",
              labels: {
                padding: 40,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("polar_doctors"), config);
    },

    barChart() {
      const labels = [
        "Jan 2021",
        "Feb 2012",
        "Mar 2021",
        "Apr 2021",
        "May 2021",
        "Jun 2021",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Enrolled Doctors",
            backgroundColor: "rgb(246, 116, 8 )",
            borderColor: "rgb(255, 99, 132)",
            barThickness: 15,
            maxBarThickness: 13,
            minBarLength: 2,
            borderRadius: 10,
            data: [5, 10, 12, 23, 28, 29, 35],
          },
          {
            label: "Enrolled Patients",
            backgroundColor: "green",
            borderColor: "rgb(255, 99, 132)",
            barThickness: 15,
            maxBarThickness: 13,
            minBarLength: 2,
            borderRadius: 10,
            data: [3, 7, 12, 20, 20, 25, 32],
          },
        ],
      };
      const config = {
        type: "bar",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "top",
              align: "start",
              labels: {
                padding: 30,
              },
            },
            title: {
              display: true,
              text: "Doctors and Patients Trend Over Time",
              align: "start",
              font: {
                size: 18,
                family: "Roboto",
                weight: "bold",
              },
            },
          },
          "maintainAspectRatio": false
        },
      };
      let bar_chart = new Chart(document.getElementById("bar"), config);

      if(screen.width <= parseInt(370)){
        bar_chart.resize(240,310);
      }
      else if(screen.width <= parseInt(420)){
        bar_chart.resize(278,380);
      }
    },
  },
  mounted() {
    if (screen.width < parseInt(420)) {
      document.getElementById("bar_chart_div").classList.remove("col-start-2");
      document.getElementById("bar_chart_div").classList.remove("col-span-2");
    }

    let tl = gsap.timeline();
    tl.fromTo(
      ".second_row",
      {
        duration: 1.1,
        y: -100,
        opacity: 0.1,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      {
        duration: 1.1,
        y: 0,
        opacity: 1,
        ease: "Expo.easeOut",
        stagger: 0.1,
      }
    );
    tl.fromTo(
      ".last_row",
      {
        duration: 1,
        x: -100,
        opacity: 0.0,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      "-=1"
    );

    this.topCardioDoughnut();
    this.topNeuroDoughnut();
    this.topRehabDoughnut();
    this.topRadioDoughnut();
    this.polarDoctorsChart();
    this.barChart();
  },
  watch: {
    drawer_state: function () {
      console.log(this.drawer_state);
      if (!this.drawer_state) {
        document.getElementById("top_cardio_doughnut").style.marginLeft =
          "-55px";
        document.getElementById("top_neuro_doughnut").style.marginLeft =
          "-55px";
        document.getElementById("top_rehab_doughnut").style.marginLeft =
          "-55px";
        document.getElementById("top_radio_doughnut").style.marginLeft =
          "-55px";

        document.getElementsByClassName("top_icon").forEach((element) => {
          element.style.top = "44%";
          element.style.left = "50%";
        });

        document.getElementById("polar_doctors").style.marginLeft = "-55px";

        document.getElementById("bar").style.width = "480px";
        document.getElementById("bar").style.height = "370px";

        document.getElementById("division").style.maxHeight = "230px";
        document.getElementById("division").style.height = "230px";
        document.getElementById("pt").style.paddingLeft = "10px";
      } else {
        document.getElementById("top_cardio_doughnut").style.marginLeft =
          "-35px";
        document.getElementById("top_neuro_doughnut").style.marginLeft =
          "-35px";
        document.getElementById("top_rehab_doughnut").style.marginLeft =
          "-35px";
        document.getElementById("top_radio_doughnut").style.marginLeft =
          "-35px";

        document.getElementsByClassName("top_icon").forEach((element) => {
          element.style.top = "40.5%";
          element.style.left = "48%";
        });

        document.getElementById("polar_doctors").style.marginLeft = "-35px";

        document.getElementById("bar").style.width = "570px";
        document.getElementById("bar").style.height = "350px";

        document.getElementById("division").style.maxHeight = "250px";
        document.getElementById("division").style.height = "250px";
        document.getElementById("pt").style.paddingLeft = "55px";
      }
    },
  },
};
</script>

<style scoped>
.top_row {
  opacity: 0;
}

@media (max-width: 420px) {
  .second_row,
  .last_row {
    margin-left: -17px !important;
  }
  .last_row{
    max-width:385px;
  }

  #top_cardio_doughnut,
  #top_neuro_doughnut,
  #top_rehab_doughnut,
  #top_radio_doughnut,
  #polar_doctors {
    margin-left: 0px;
  }
}

@media (max-width: 360px) {
  .second_row,
  .last_row {
    margin-left: -17px !important;
  }
  .last_row{
    max-width:340px;
  }
  .second_row{
    max-width: 340px;
  }


  #top_cardio_doughnut,
  #top_neuro_doughnut,
  #top_rehab_doughnut,
  #top_radio_doughnut,
  #polar_doctors {
    margin-left: -25px;
  }
}
</style>
