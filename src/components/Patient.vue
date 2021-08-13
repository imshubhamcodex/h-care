<template>
  <div>
    <!---parent div start-->
    <div class="grid lg:grid-cols-4">
      <!---------->
      <div class="w-full p-4 lg:w-75 top_row">
        <div
          cols="12"
          sm="3"
          class="bg-white p-6 shadow-lg relative"
          style="border-radius: 7px"
        >
          <v-icon
            style="position: absolute; top: 10px; right: 10px"
            class="ml-5"
            >mdi-dots-horizontal</v-icon
          >
          <div class="flex">
            <div>
              <v-btn
                elevation="0"
                style="background-color: rgba(111, 57, 217, 0.1)"
                fab
              >
                <v-icon style="color: purple">mdi-bed</v-icon>
              </v-btn>
            </div>
            <div>
              <h2 class="font-bold mb-2 ml-12 text-xl text-gray-800">3,256</h2>
              <p class="ml-12">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
      <!-------->
      <div class="w-full p-4 lg:w-75 top_row">
        <div
          cols="12"
          sm="3"
          class="bg-white p-6 shadow-lg relative"
          style="border-radius: 7px"
        >
          <v-icon
            style="position: absolute; top: 10px; right: 10px"
            class="ml-5"
            >mdi-dots-horizontal</v-icon
          >
          <div class="flex">
            <div>
              <v-btn
                elevation="0"
                style="background-color: rgba(0, 255, 255, 0.1)"
                fab
              >
                <v-icon style="color: cyan">mdi-account-group</v-icon>
              </v-btn>
            </div>
            <div>
              <h2 class="font-bold mb-2 ml-12 text-xl text-gray-800">396</h2>
              <p class="ml-12">Available staff</p>
            </div>
          </div>
        </div>
      </div>
      <!-------->
      <div class="w-full p-4 lg:w-75 top_row">
        <div
          cols="12"
          sm="3"
          class="bg-white p-6 shadow-lg relative"
          style="border-radius: 7px"
        >
          <v-icon
            style="position: absolute; top: 10px; right: 10px"
            class="ml-5"
            >mdi-dots-horizontal</v-icon
          >
          <div class="flex">
            <div>
              <v-btn
                elevation="0"
                style="background-color: rgba(255, 140, 0, 0.1)"
                fab
              >
                <v-icon style="color: darkorange">mdi-currency-usd</v-icon>
              </v-btn>
            </div>
            <div>
              <h2 class="font-bold mb-2 ml-12 text-xl text-gray-800">$2,236</h2>
              <p class="ml-12">Avg Treat. Cost</p>
            </div>
          </div>
        </div>
      </div>
      <!----------->
      <div class="w-full p-4 lg:w-75 top_row">
        <div
          cols="12"
          sm="3"
          class="bg-white p-6 shadow-lg relative"
          style="border-radius: 7px"
        >
          <v-icon
            style="position: absolute; top: 10px; right: 10px"
            class="ml-5"
            >mdi-dots-horizontal</v-icon
          >
          <div class="flex">
            <div>
              <v-btn
                elevation="0"
                style="background-color: rgba(255, 0, 0, 0.1)"
                fab
              >
                <v-icon style="color: red">mdi-ambulance</v-icon>
              </v-btn>
            </div>
            <div>
              <h2 class="font-bold mb-2 ml-12 text-xl text-gray-800">36</h2>
              <p class="ml-12">Total cars avail.</p>
            </div>
          </div>
        </div>
      </div>
      <!---------->
    </div>
    <!-----parent div ends-->

    <!---second row :start-->
    <div class="grid lg:grid-cols-4">
      <div class="col-start-1 col-span-3 p-6">
        <div
          class="bg-white p-6 shadow-lg flex second_row"
          style="border-radius: 7px"
        >
          <canvas height="300px" width="600px" id="bar" class="mr-5"></canvas>
          <div class="relative second_row">
            <div style="float: right" class="mx-6 pb-6 mt-1">
              Show
              <span class="font-bold"
                >by month
                <v-icon
                  class="ml-3"
                  @click="P_in_out_dropdown = !P_in_out_dropdown"
                  >{{
                    P_in_out_dropdown ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon
                ></span
              >
            </div>
            <canvas height="300px" width="290px" id="doughnut"></canvas>
            <v-icon
              class=""
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-account-group" }}</v-icon
            >
          </div>
        </div>
      </div>
      <div class="p-6 second_row">
        <div class="bg-white p-6 shadow-lg" style="border-radius: 7px">
          <div class="relative">
            <div class="mx-6 pb-6 mt-1">
              <h1 class="font-bold text-sm">Patients by Gender</h1>
            </div>
            <canvas
              class="-ml-7"
              height="300px"
              width="290px"
              id="doughnut_gender"
            ></canvas>
            <v-icon
              class=""
              style="
                top: 40.5%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-gender-male-female" }}</v-icon
            >
          </div>
        </div>
      </div>
    </div>
    <!---second row :end-->

    <!---third row :start-->
    <div class="grid lg:grid-cols-4">
      <div class="col-start-1 col-span-2 p-6">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <canvas height="300px" width="550px" id="linechart"></canvas>
        </div>
      </div>
      <div class="col-start-3 col-span-1 p-6">
        <div class="bg-white shadow-lg" style="border-radius: 7px">
          <div class="flex">
            <h2 class="font-bold p-6">Patients by Division</h2>
            <v-icon class="ml-12">mdi-chevron-down</v-icon>
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
            <v-list-item v-for="item in items" :key="item.id">
              <v-list-item-icon>
                <v-icon style="color: grey">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-2" style="color: grey"
                  >{{ item.title }}
                  <span style="float: right; color: black">{{
                    item.point
                  }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </div>
      <!----->
      <div class="col-start-4 col-span-1 p-6">
        <div
          class="shadow-lg"
          id="patient_by_disease"
          style="border-radius: 7px; height: 350px; background-color: #9966cc"
        >
          <h2 class="font-bold p-4">Patients by Disease</h2>
          <v-divider />
          <canvas height="380px" width="300px" id="piechart"></canvas>
        </div>
      </div>
    </div>

    <!---third row :end-->
  </div>
</template>

<script>
import gsap from "gsap"; // animation
import Chart from "chart.js/auto";
export default {
  props: ["drawer_state"],
  data() {
    return {
      P_in_out_dropdown: false,
      items: [
        {
          title: "Cardiology",
          icon: "mdi-heart-pulse",
          id: "mdi-heart-pulse1",
          point: "247",
        },

        {
          title: "Neurology",
          icon: "mdi-brain",
          id: "mdi-heart-pulse2",
          point: "86",
        },
        {
          title: "Surgery",
          icon: "mdi-content-cut",
          id: "mdi-content-cut3",
          point: "247",
        },
        {
          title: "Radiology",
          icon: "mdi-radioactive",
          id: "mdi-radiology-box4",
          point: "164",
        },
        {
          title: "Dietary",
          icon: "mdi-food-croissant",
          id: "mdi-food-croissant4",
          point: "100",
        },
      ],
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },
  methods: {
    barChart() {
      // ploting bar graph
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
            label: "Inpatients Trend",
            backgroundColor: "purple",
            borderColor: "rgb(255, 99, 132)",
            barThickness: 15,
            maxBarThickness: 13,
            minBarLength: 2,
            borderRadius: 10,
            data: [5, 15, 12, 23, 28, 22, 35],
          },
          {
            label: "Outpatients Trend",
            backgroundColor: "darkturquoise",
            borderColor: "rgb(255, 99, 132)",
            barThickness: 15,
            maxBarThickness: 13,
            minBarLength: 2,
            borderRadius: 10,
            data: [3, 10, 8, 20, 16, 19, 24],
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
              text: "Outpatients vs. Inpatients Trend",
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
      var myChart = new Chart(document.getElementById("bar"), config);
      console.log(myChart);
    },
    doughnutChart() {
      // ploting  graph
      const labels = ["Number of Inpatients", "Number of Outpatients"];
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
          maintainAspectRatio: false,
          cutout: 82,
        },
      };
      new Chart(document.getElementById("doughnut"), config);
    },

    doughnutChartGender() {
      // ploting  graph
      const labels = ["Number of Male Patients", "Number of Female Patients"];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["rgba(128,0,128,0.8)", "rgba(255,69,0,0.8)"],
            borderColor: ["rgba(128,0,128,1)", "rgba(255,69,0,1)"],
            hoverBackgroundColor: ["rgba(128,0,128,1)", "rgba(255,69,0,1)"],
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
          maintainAspectRatio: false,
          cutout: 82,
        },
      };
      new Chart(document.getElementById("doughnut_gender"), config);
    },
    linechart() {
      const labels = ["07 am", "08 am", "09 am", "10 am", "11 am", "12 pm"];

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Number of patients",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [42, 56, 48, 65, 61, 71],
            lineTension: 0.4,
            fill: {
              target: "origin",
              above: "rgb(255,182,193)", // Area will be red above the origin
              below: "rgb(0, 0, 255)", // And blue below the origin
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
              tension: "2",
              align: "start",
              labels: {
                padding: 30,
              },
            },
            title: {
              display: true,
              text: "Time Admitted",
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

      new Chart(document.getElementById("linechart"), config);
    },
    piechart() {
      const label = ["Migrain", "Tuberculosis", "Stones", "Anaemia"];
      const data = {
        labels: label,
        datasets: [
          {
            backgroundColor: ["brown", "yellow", "red", "cyan"],
            data: [780, 520, 1000, 710],
            hoverBorderColor: ["black", "black", "black", "black"],
            borderColor: ["brown", "yellow", "red", "cyan"],
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
  },
  mounted() {
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
      ".top_row",
      {
        duration: 1.2,
        y: -100,
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
      },
      "-=1"
    );

    this.barChart();
    this.doughnutChart();
    this.linechart();
    this.doughnutChartGender();
    this.piechart();
  },
  watch: {
    drawer_state: function () {
      console.log(this.drawer_state);
      if (!this.drawer_state) {
        document.getElementById("doughnut").style.width = "250px";
        document.getElementById("bar").style.width = "500px";
        document.getElementById("linechart").style.width = "500px";
        document.getElementById("doughnut_gender").style.width = "250px";

        document.getElementById("doughnut").style.height = "250px";
        document.getElementById("bar").style.height = "250px";
        document.getElementById("linechart").style.height = "250px";
        document.getElementById("doughnut_gender").style.height = "250px";

        document.getElementById("division").style.maxHeight = "140px";
        document.getElementById("division").style.height = "140px";
        document.getElementById("pt").style.paddingLeft = "10px";

        document.getElementById("patient_by_disease").style.height = "300px";
      } else {
        document.getElementById("doughnut").style.width = "290px";
        document.getElementById("bar").style.width = "600px";
        document.getElementById("linechart").style.width = "550px";
        document.getElementById("doughnut_gender").style.width = "290px";

        document.getElementById("doughnut").style.height = "300px";
        document.getElementById("bar").style.height = "300px";
        document.getElementById("linechart").style.height = "300px";
        document.getElementById("doughnut_gender").style.height = "300px";

        document.getElementById("division").style.maxHeight = "215px";
        document.getElementById("division").style.height = "215px";
        document.getElementById("pt").style.paddingLeft = "55px";

        document.getElementById("patient_by_disease").style.height = "350px";
      }
    },
  },
};
</script>

<style scoped>
.top_row {
  opacity: 0;
}
</style>
