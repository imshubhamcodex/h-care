<template>
  <!---parent div start-->
  <div>
    <!--row1 starts-->

    <div class="grid lg:grid-cols-4 top_row">
      <!--col1 starts-->
      <div class="col-start-1 col-span-2 p-6">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <canvas height="300px" width="550px" id="linechart"></canvas>
        </div>
      </div>
      <!--col1 ends-->

      <!----col2 starts--->
      <div class="col-start-3 col-span-1 p-6">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div class="relative" style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">Doctors by Gender</h1>

            <canvas
              class="-ml-7"
              height="300px"
              width="270px"
              id="doughnut_gender"
            ></canvas>
            <v-icon
              class=""
              style="
                top: 35%;
                left: 45%;
                transform: translate(-50%, -50%);
                position: absolute;
                zoom: 2;
              "
              >{{ "mdi-gender-male-female" }}</v-icon
            >
          </div>
        </div>
      </div>

      <!---col2 ends------>
      <!--col3 starts-->
      <div class="col-start-4 col-span-1 p-6">
        <div
          class="bg-white shadow-lg"
          style="border-radius: 7px; background-color: #feafd5"
        >
          <div class="flex">
            <h2 class="font-bold p-6">Doctors by Division</h2>
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
      <!--col3 ends---->
    </div>
    <!---row1 ends--->

    <!----row2 starts--->
    <div class="grid lg:grid-cols-4 second_row">
      <!---row2col1 starts--->
      <div class="col-start-1 col-span-1 p-6">
        <div
          class="bg-white p-6 shadow-lg flex"
          style="border-radius: 7px; background-color: #b0eee9"
        >
          <div class="relative" style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md" id="polarheading">Appointments per department</h1>

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
      <div class="col-start-2 col-span-1 p-6">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div class="relative" style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">AVg Doctor salary per Dept.</h1>
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
      <div class="col-start-3 col-span-2 p-6">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div  style="border-radius: 7px; height: 300px">
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
export default {
  props: ["drawer_state"],
  data() {
    return {
      items: [
        {
          title: "Cardiologist",
          icon: "mdi-heart-pulse",
          id: "mdi-heart-pulse1",
          point: "30",
        },

        {
          title: "Neurologist",
          icon: "mdi-brain",
          id: "mdi-heart-pulse2",
          point: "16",
        },
        {
          title: "Surger",
          icon: "mdi-content-cut",
          id: "mdi-content-cut3",
          point: "26",
        },
        {
          title: "Radiologist",
          icon: "mdi-radioactive",
          id: "mdi-radiology-box4",
          point: "12",
        },
        {
          title: "Dietary",
          icon: "mdi-food-croissant",
          id: "mdi-food-croissant4",
          point: "42",
        },
      ],
      mini: true,
      dropdown: false,
      selectedItem: 0,
    };
  },

  methods: {
    linechart() {
      const labels = [
        "09 am",
        "10 am",
        "11 am",
        "12 am",
        "2 pm",
        "3 pm",
        "4pm",
      ];

      const data = {
        labels: labels,
        datasets: [
          {
            label: "Number of Appointments",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "#D4F773",
            data: [26, 31, 18, 46, 36, 55, 29],
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
              tension: "2",
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

      new Chart(document.getElementById("linechart"), config);
    },
    doughnutChartGender() {
      // ploting  graph
      const labels = ["Number of Male Patients", "Number of Female Patients"];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["#69F8C3", "#F8699E"],
            borderColor: ["#69F8C3", "#F8699E"],
            hoverBackgroundColor: ["#52F1B6", "#F1528D"],
            hoverBorderColor: ["black", "black"],
            data: [34, 48],
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
            data: [25, 48, 15, 20],
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
    piechart() {
      const label = ["Cardiology", "Neurology", "Radiology", "Rehabilitation"];
      const data = {
        labels: label,
        datasets: [
          {
            backgroundColor: ["#AE89EC", "yellow", "#C7EC89", "cyan"],
            data: [100, 125, 80, 110],
            hoverBorderColor: ["black", "black", "black", "black"],
            borderColor: ["#AE89EC", "yellow", "#C7EC89", "cyan"],
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
      const labels = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Months",
            data: [8, 9, 8, 7, 6.5, 8.5, 6,7,9.5,10,7.5,8],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
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
        },
      };
      new Chart(document.getElementById("barchart"), config);
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

    this.linechart();
    this.doughnutChartGender();
    this.polarDoctorsChart();
    this.piechart();
    this.barchart();
  },
  watch: {
    drawer_state: function () {
      console.log(this.drawer_state);
      if (!this.drawer_state) {
        document.getElementById("piechart").style.width = "250px";
        document.getElementById("barchart").style.width = "500px";
        document.getElementById("linechart").style.width = "500px";
        document.getElementById("doughnut_gender").style.width = "250px";

        document.getElementById("piechart").style.height = "250px";
        document.getElementById("barchart").style.height = "250px";
        document.getElementById("linechart").style.height = "250px";
        document.getElementById("doughnut_gender").style.height = "250px";

        document.getElementById("division").style.maxHeight = "140px";
        document.getElementById("division").style.height = "140px";
        document.getElementById("pt").style.paddingLeft = "10px";
        document.getElementById("polarheading").style.paddingLeft = "0px";
        
        

        document.getElementById("patient_by_disease").style.height = "300px";
      } else {
        document.getElementById("piechart").style.width = "290px";
        document.getElementById("barchart").style.width = "550px";
        document.getElementById("linechart").style.width = "550px";
        document.getElementById("doughnut_gender").style.width = "270px";

        document.getElementById("piechart").style.height = "270px";
        document.getElementById("barchart").style.height = "300px";
        document.getElementById("linechart").style.height = "300px";
        document.getElementById("doughnut_gender").style.height = "300px";

        document.getElementById("division").style.maxHeight = "215px";
        document.getElementById("division").style.height = "215px";
        document.getElementById("pt").style.paddingLeft = "55px";
        document.getElementById("polarheading").style.paddingLeft = "10px";
        

        document.getElementById("patient_by_disease").style.height = "350px";
      }
    },
  },
};
</script>
