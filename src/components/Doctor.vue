<template>
  <!---parent div start-->
  <div>
    <!--row1 starts-->

    <div class="grid lg:grid-cols-4">
      <!--col1 starts-->
      <div id="linechart_div" class="col-start-1 col-span-2 p-6 top_row">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <canvas height="300px" width="550px" id="linechart"></canvas>
        </div>
      </div>
      <!--col1 ends-->

      <!----col2 starts--->
      <div class="p-6 top_row">
        <div
          class="bg-white p-6 shadow-lg flex gender_box"
          style="border-radius: 7px"
        >
          <div class="relative" style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">Doctors by Gender</h1>

            <canvas
              class="-ml-7"
              height="300px"
              width="270px"
              id="doughnut_gender"
            ></canvas>
            <v-icon
              style="
                top: 40%;
                left: 45%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              id="v_icon_gender"
              >{{ "mdi-gender-male-female" }}</v-icon
            >
          </div>
        </div>
      </div>

      <!---col2 ends------>
      <!--col3 starts-->
      <div class="p-6 top_row">
        <div class="bg-white shadow-lg" style="border-radius: 7px">
          <div class="flex">
            <h2 class="font-bold p-6">Doctors by Division</h2>
          </div>
          <v-divider></v-divider>
          <div style="color: #d3d3d3" class="pl-4 pt-4 pb-4 flex">
            <div>
              <v-icon style="color: #d3d3d3">mdi-home</v-icon>
            </div>
            <div>
              <h2 class="pl-2 pt-1">DIVISION</h2>
            </div>
            <div>
              <h2 id="pt" class="ml-16 pl-11 mt-1">PT.</h2>
            </div>
          </div>
          <v-divider></v-divider>
          <div
            id="division"
            style="height: 215px; max-height: 215px; overflow-y: scroll"
          >
            <v-list-item v-for="(item, index) in items" :key="item.id">
              <v-list-item-icon>
                <v-icon style="color: grey">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-2" style="color: grey"
                  >{{ item.title }}
                  <span style="float: right; color: black">{{
                    no_of_doctors[index]
                  }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </div>
      <!--col3 ends---->
    </div>
    <!---row1 ends--->

    <!----row2 starts--->
    <div class="grid lg:grid-cols-4">
      <!---row2col1 starts--->
      <div class="p-6 second_row">
        <div
          class="bg-white p-6 shadow-lg flex"
          style="border-radius: 7px; background-color: #b0eee9"
        >
          <div style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md" id="polarheading">
              Appointments per department
            </h1>

            <canvas
              class="-ml-9"
              height="300px"
              width="290px"
              id="polar_doctors"
            ></canvas>
          </div>
        </div>
      </div>
      <!----row2col1 ends--->

      <!----row2col2 starts--->
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div class="relative" style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">Avg Doctor salary per Dept.</h1>
            <p class="font-bold text-sm">(In thousands)</p>

            <canvas
              class="-ml-6"
              height="290px"
              width="280px"
              id="piechart"
            ></canvas>
          </div>
        </div>
      </div>

      <!----row2col2 starts--->

      <!----row2col3 starts--->
      <div id="bar_chart_div" class="col-start-3 col-span-2 p-6 second_row">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">Avg Doctor Rating</h1>

            <canvas
              class="-ml-6"
              height="300px"
              width="550px"
              id="barchart"
            ></canvas>
          </div>
        </div>
      </div>

      <!----row2col3 starts--->

      <!----row2 ends------>
    </div>
    <!--row1 ends ----->
  </div>
  <!---parent div ends-->
</template>
<script>
import Chart from "chart.js/auto";
import gsap from "gsap";
import store from "../store/index.js";
export default {
  props: ["drawer_state"],
  data() {
    return {
      items: [
        {
          title: "Cardiologist",
          icon: "mdi-heart-pulse",
          id: "mdi-heart-pulse1",
        },

        {
          title: "Neurologist",
          icon: "mdi-brain",
          id: "mdi-heart-pulse2",
        },
        {
          title: "Physiatrists",
          icon: "mdi-needle",
          id: "mdi-content-cut3",
        },
        {
          title: "Surgeon",
          icon: "mdi-content-cut",
          id: "mdi-content-3",
        },
        {
          title: "Radiologist",
          icon: "mdi-radioactive",
          id: "mdi-radiology-box4",
        },
        {
          title: "Bariatrician",
          icon: "mdi-food-croissant",
          id: "mdi-food-croissant4",
        },
      ],
      no_of_doctors: store.state.doctors.doctors_details.no_of_doctors,
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },

  methods: {
    linechart() {
      const labels = store.state.doctors.doctors_details.doctors_apptX;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Number of Appointments",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "#D4F773",
            data: store.state.doctors.doctors_details.doctors_apptY,
            lineTension: 0.4,
            fill: {
              target: "origin",
              above: "#E6FAAF",
              below: "#E6FAAF",
            },
          },
        ],
      };

      const config = {
        type: "line",
        data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: "top",
              tension: "5",
              align: "start",
              labels: {
                padding: 30,
              },
            },
            title: {
              display: true,
              text: "Appointment Time",
              align: "start",
              font: {
                size: 18,
                family: "Roboto",
                weight: "bold",
              },
            },
          },
          maintainAspectRatio: false,
        },
      };

      let line_chart = new Chart(document.getElementById("linechart"), config);

      if (screen.width <= parseInt(370)) {
        line_chart.resize(240, 300);
      } else if (screen.width <= parseInt(420)) {
        line_chart.resize(278, 350);
      }
    },
    doughnutChartGender() {
      // ploting  graph
      const labels = ["Number of Male Doctors", "Number of Female Doctors"];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["#69F8C3", "#F8699E"],
            borderColor: ["#69F8C3", "#F8699E"],
            hoverBackgroundColor: ["#52F1B6", "#F1528D"],
            hoverBorderColor: ["black", "black"],
            data: [
              store.state.doctors.doctors_details.male_doctors,
              store.state.doctors.doctors_details.female_doctors,
            ],
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
          maintainAspectRatio: false,
          cutout: 82,
        },
      };
      new Chart(document.getElementById("doughnut_gender"), config);
    },
    polarDoctorsChart() {
      const labels = [
        "Cardiology",
        "Neurology",
        "Rehabilitation",
        "Surgeon",
        "Radiology",
        "Dietary",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: [
              "rgba(255, 99, 132,0.8)",
              "rgba(75, 192, 192,0.8)",
              "rgba(255, 205, 86,0.8)",
              "rgba(201, 103, 207,0.8)",
              "rgba(201, 20, 107,0.8)",
              "rgba(201, 200, 245,0.8)",
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132,1)",
              "rgba(75, 192, 192,1)",
              "rgba(255, 205, 86,1)",
              "rgba(201, 103, 207,1)",
              "rgba(201, 20, 107,1)",
              "rgba(201, 200, 245,1)",
            ],
            hoverBorderColor: ["black", "black"],
            data: store.state.doctors.doctors_details.doctors_per_department,
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
                padding: 30,
                usePointStyle: true,
              },
            },
          },
          cutout: 82,
        },
      };
      new Chart(document.getElementById("polar_doctors"), config);
    },
    piechart() {
      const label = [
        "Cardiology",
        "Neurology",
        "Rehabilitation",
        "Surgeon",
        "Radiology",
        "Dietary",
      ];
      const data = {
        labels: label,
        datasets: [
          {
            backgroundColor: [
              "#AE89EC",
              "yellow",
              "#C7EC89",
              "cyan",
              "black",
              "red",
            ],
            data: store.state.doctors.doctors_details.avg_salaries,
            hoverBorderColor: [
              "black",
              "black",
              "black",
              "black",
              "black",
              "black",
            ],
            borderColor: [
              "#AE89EC",
              "yellow",
              "#C7EC89",
              "cyan",
              "black",
              "red",
            ],
          },
        ],
      };
      const config = {
        type: "pie",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,

              labels: {
                color: "black",
              },
              position: "top",
            },
          },
        },
      };
      new Chart(document.getElementById("piechart"), config);
    },
    barchart() {
      const labels = [
        "Cardiology",
        "Neurology",
        "Rehabilitation",
        "Surgeon",
        "Radiology",
        "Dietary",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Doctors",
            data: store.state.doctors.doctors_details.avg_ratings,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          maintainAspectRatio: false,
        },
      };
      let bar_chart = new Chart(document.getElementById("barchart"), config);

      if (screen.width <= parseInt(370)) {
        bar_chart.resize(240, 300);
      } else if (screen.width <= parseInt(420)) {
        bar_chart.resize(278, 350);
      }
    },
  },
  mounted() {
    if (screen.width < parseInt(420)) {
      document.getElementById("linechart_div").classList.remove("col-start-1");
      document.getElementById("linechart_div").classList.remove("col-span-2");

      document.getElementById("bar_chart_div").classList.remove("col-start-3");
      document.getElementById("bar_chart_div").classList.remove("col-span-2");
    }

    let tl = gsap.timeline();

    tl.fromTo(
      ".top_row",
      {
        duration: 1.1,
        y: -100,
        opacity: 0,
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
      ".second_row",
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
      "-=0.8"
    );

    this.linechart();
    this.doughnutChartGender();
    this.polarDoctorsChart();
    this.piechart();
    this.barchart();
  },
  watch: {
    drawer_state: function () {
      if (!this.drawer_state) {
        document.getElementById("piechart").style.width = "250px";
        document.getElementById("barchart").style.width = "500px";
        document.getElementById("linechart").style.width = "500px";
        document.getElementById("doughnut_gender").style.width = "250px";

        document.getElementById("piechart").style.height = "250px";
        document.getElementById("barchart").style.height = "250px";
        document.getElementById("linechart").style.height = "250px";
        document.getElementById("doughnut_gender").style.height = "250px";
        document.getElementsByClassName("gender_box")[0].style.height = "300px";

        document.getElementById("division").style.maxHeight = "140px";
        document.getElementById("division").style.height = "140px";
        document.getElementById("pt").style.paddingLeft = "10px";
        document.getElementById("polarheading").style.marginLeft = "-27px";

        document.getElementById("polar_doctors").style.marginLeft = "-55px";

        document.getElementById("v_icon_gender").style.top = "35%";
      } else {
        document.getElementById("piechart").style.width = "290px";
        document.getElementById("barchart").style.width = "550px";
        document.getElementById("linechart").style.width = "550px";
        document.getElementById("doughnut_gender").style.width = "270px";

        document.getElementById("piechart").style.height = "270px";
        document.getElementById("barchart").style.height = "300px";
        document.getElementById("linechart").style.height = "300px";
        document.getElementById("doughnut_gender").style.height = "300px";
        document.getElementsByClassName("gender_box")[0].style.height = "350px";

        document.getElementById("v_icon_gender").style.top = "40%";

        document.getElementById("division").style.maxHeight = "215px";
        document.getElementById("division").style.height = "215px";
        document.getElementById("pt").style.paddingLeft = "55px";
        document.getElementById("polarheading").style.paddingLeft = "10px";
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 420px) {
  .top_row,
  .second_row {
    margin-left: -17px !important;
  }

  #doughnut_gender,
  #polar_doctors,
  #piechart {
    margin-left: 0px;
  }
  #v_icon_gender {
    margin-left: 7px;
    margin-top: -2px;
  }
}

@media (max-width: 360px) {
  .second_row,
  .top_row {
    margin-left: -17px !important;
  }
  .top_row {
    max-width: 340px;
  }
  .second_row {
    max-width: 340px;
  }

  #doughnut_gender,
  #polar_doctors,
  #piechart {
    margin-left: -25px;
  }
  #v_icon_gender {
    margin-left: 0px;
    margin-top: -2px;
  }
}
</style>
