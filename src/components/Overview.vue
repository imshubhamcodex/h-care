<template>
  <div>
    <!---first row :start-->
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
    <!---first row :end-->

    <!----row2 starts--->
    <div class="grid lg:grid-cols-4">
      <!---row2col1 starts--->
      <div class="p-6 last_row">
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
              id="polarchart"
            ></canvas>
          </div>
        </div>
      </div>
      <!----row2col1 ends--->

      <!----row2col2 starts--->
      <div class="p-6 second_row">
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
      <div id="bar_chart_div" class=" col-start-3 col-span-2 p-6 second_row">
        <div class="bg-white p-6 shadow-lg flex" style="border-radius: 7px">
          <div  style="border-radius: 7px; height: 300px">
            <h1 class="font-bold text-md">Doctor Avg Rating</h1>

            <canvas
              class="-ml-6"
              height="300px"
              width="550px"
              id="barchart2"
            ></canvas>
          </div>
        </div>
      </div>

      <!----row2col3 starts--->

      <!----row2 ends------>
    </div>

    <!--row3 starts-->
    <div class="grid lg:grid-cols-4">
      <!---------->
      <div class="w-full p-4 lg:w-75 last_row">
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
      <div class="w-full p-4 lg:w-75 last_row">
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
      <div class="w-full p-4 lg:w-75 last_row">
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
      <div class="w-full p-4 lg:w-75 last_row">
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
      <!----------row3 ends-->
    </div>
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

    polarChart() {
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
      new Chart(document.getElementById("polarchart"), config);
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
    barchart2() {
      const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Months",
            data: [8, 9, 8, 7, 6.5, 8.5, 6, 7, 9.5, 10, 7.5, 8],
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
          maintainAspectRatio: false,
        },
      };
      let bar_chart = new Chart(document.getElementById("barchart2"), config);

      if (screen.width <= parseInt(370)) {
        bar_chart.resize(240, 300);
      } else if (screen.width <= parseInt(420)) {
        bar_chart.resize(278, 350);
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

    this.polarDoctorsChart();
    this.barChart();
    this.polarChart();
    this.piechart();
    this.barchart2();
  },

  watch: {
    drawer_state: function () {
      if (!this.drawer_state) {
        document.getElementById("piechart").style.width = "250px";
        document.getElementById("bar").style.width = "480px";
        document.getElementById("barchart2").style.width = "500px";
        

        document.getElementById("piechart").style.height = "250px";
        document.getElementById("bar").style.height = "370px";
        document.getElementById("barchart2").style.height = "250px";
        document.getElementById("division").style.maxHeight = "230px";
        document.getElementById("division").style.height = "230px";
        document.getElementById("pt").style.paddingLeft = "10px";

       
        document.getElementById("polarheading").style.marginLeft = "-27px";
        // document.getElementById("polar_doctors").style.marginLeft = "-55px";
        document.getElementById("polarchart").style.marginLeft = "-50px";

        document.getElementById("v_icon_gender").style.top = "35%";
      } else {
        document.getElementById("piechart").style.width = "290px";
        document.getElementById("bar").style.width = "570px";
        document.getElementById("barchart2").style.width = "550px";
       

        document.getElementById("piechart").style.height = "270px";
        document.getElementById("bar").style.height = "350px";
        document.getElementById("barchart2").style.height = "300px";
        document.getElementById("division").style.maxHeight = "250px";
        document.getElementById("division").style.height = "250px";
        document.getElementById("pt").style.paddingLeft = "55px";

        document.getElementById("v_icon_gender").style.top = "40%";

        
        document.getElementById("polarheading").style.paddingLeft = "10px";
      }
    },
  },

};
</script>