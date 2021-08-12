<template>
  <v-app>
    <v-stepper style="border-top: 1px solid grey" elevation="0" v-model="e1">
      <v-stepper-header>
        <v-stepper-step color="purple" :complete="e1 > 1" step="1">
          Primary Info
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="purple" :complete="e1 > 2" step="2">
          Secondary Info
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="purple" step="3">Optional info </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="100%">
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Name</span>
                      <v-text-field
                        v-model="name"
                        label="Name"
                        clearable
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Age</span>

                      <v-text-field
                        v-model="age"
                        outlined
                        label="Age"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Mobile</span>
                      <v-text-field
                        v-model="mobile"
                        outlined
                        label="Mobile"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Gender</span>

                      <v-select
                        :items="genders"
                        label="Gender"
                        outlined
                        clearable
                        v-model="gender"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Email</span>
                      <v-text-field
                        v-model="email"
                        outlined
                        label="Email"
                        clearable
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" class="cols">
                      <span class="text-sm font-bold">Patient Address</span>
                      <v-text-field
                        v-model="address"
                        label="Address"
                        outlined
                        clearable
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>
          </v-card>

          <v-btn
            style="background-color: purple; color: white"
            @click="e1 = 2"
            class="btn"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="100%">
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Patient Admit Date</span>
                      <v-text-field
                        v-model="admit_timestamp"
                        label="Admit date"
                        clearable
                        outlined
                        type="date"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold"
                        >Patient Release Date</span
                      >

                      <v-text-field
                        v-model="release_timestamp"
                        outlined
                        label="Release Date"
                        clearable
                        type="date"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Patient Problem</span>
                      <v-text-field
                        v-model="problem"
                        outlined
                        label="Problem"
                        clearable
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor ID</span>

                      <v-select
                        :items="doctors"
                        label="ID"
                        outlined
                        clearable
                        v-model="doctor_id"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>
          </v-card>

          <v-btn style="background-color: purple; color: white" @click="e1 = 3">
            Continue
          </v-btn>

          <v-btn text @click="e1 = 1"> Back </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" height="100%">
            <template>
              <template>
                <v-form>
                  <v-container>
                    <v-row
                      class="relative mt-4"
                      v-for="(row, index) in patient_history"
                      :key="index"
                    >
                      <v-btn
                        @click="remove(index)"
                        class="ma-2"
                        text
                        color="indigo"
                        style="position: absolute; right: 0px; top: -25px"
                      >
                        <v-icon left> mdi-minus </v-icon>
                        Remove
                      </v-btn>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold">Hospital Name</span>
                        <v-text-field
                          v-model="row.hospital_name"
                          label="Hospital"
                          clearable
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold">Disease Name</span>

                        <v-text-field
                          v-model="row.disease"
                          outlined
                          label="Disease"
                          clearable
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold">Cost Of Treatment</span>
                        <v-text-field
                          v-model="row.cost_of_treatment"
                          outlined
                          label="Cost"
                          clearable
                          type="number"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold"
                          >Estimated Cost In H-care</span
                        >
                        <v-text-field
                          v-model="row.estimated_cost_in_h_care"
                          label="Cost"
                          outlined
                          clearable
                          type="number"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold"
                          >Patient Admit Date</span
                        >
                        <v-text-field
                          v-model="row.admit_timestamp"
                          label="Admit date"
                          clearable
                          outlined
                          type="date"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold"
                          >Patient Release Date</span
                        >

                        <v-text-field
                          v-model="row.release_timestamp"
                          outlined
                          label="Release Date"
                          clearable
                          type="date"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <div class="text-center">
                          <v-btn
                            @click="fun"
                            class="ma-2"
                            outlined
                            color="indigo"
                          >
                            <v-icon left> mdi-plus </v-icon>
                            {{
                              this.patient_history.length === 0
                                ? "Add History"
                                : "Add Another one"
                            }}
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </template>
            </template>
          </v-card>

          <v-btn style="background-color: purple; color: white" @click="e1 = 1">
            Submit
          </v-btn>

          <v-btn text @click="e1 = 2"> Back </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      e1: 1,
      name: null,
      age: null,
      mobile: null,
      genders: ["Male", "Female"],
      doctors: ["doc1", "doc2", "doc3"],
      gender: null,
      email: null,
      admit_timestamp: null,
      release_timestamp: null,
      address: null,
      problem: null,
      doctor_id: null,
      patient_history: [],
    };
  },
  methods: {
    fun() {
      let data = {
        hospital_name: null,
        disease: null,
        cost_of_treatment: null,
        admit_timestamp: null,
        release_timestamp: null,
        estimated_cost_in_h_care: null,
      };
      this.patient_history.push(data);
    },
    remove(index) {
      this.patient_history.splice(index, 1);
    },
  },
  mounted() {
    let tl = gsap.timeline();

    tl.fromTo(
      ".cols",
      {
        duration: 1,
        y: -100,
        opacity: 0.0,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "Expo.easeOut",
        stagger: 0.1,
      },
    );
    tl.fromTo(
      ".btn",
      {
        duration: 0.1,
        opacity: 0,
        stagger: 0.1,
      },
      {
        duration: 0.1,
        opacity: 1,
        stagger: 0.1,
      },
      "-=0.2"
    );
  },
};
</script>

<style>
.v-stepper__step__step {
  margin-right: 5px;
}
.v-form {
  background: white;
  border: 0px;
  outline: 0px;
  border-style: none;
}
.v-application .grey {
  border: 0px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 0%), 0 2px 2px 0 rgb(0 0 0 / 0%),
    0 1px 5px 0 rgb(0 0 0 / 0%);
}
</style>
