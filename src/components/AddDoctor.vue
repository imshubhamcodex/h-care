<template>
  <v-app>
    <v-stepper style="border-top: 1px solid grey" elevation="0" v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Primary Info
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Secondary Info
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Optional info </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="100%">
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Name</span>
                      <v-text-field
                        v-model="name"
                        label="Name"
                        clearable
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Age</span>

                      <v-text-field
                        v-model="age"
                        outlined
                        label="Age"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Mobile</span>
                      <v-text-field
                        v-model="mobile"
                        outlined
                        label="Mobile"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Gender</span>

                      <v-select
                        :items="genders"
                        label="Gender"
                        outlined
                        clearable
                        v-model="gender"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Email</span>
                      <v-text-field
                        v-model="email"
                        outlined
                        label="Email"
                        clearable
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span class="text-sm font-bold">Doctor Address</span>
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

          <v-btn style="background-color: cyan; color: white" @click="e1 = 2">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="100%">
            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <span class="text-sm font-bold">Doctor Education</span>
                      <v-text-field
                        v-model="education"
                        label="Education"
                        clearable
                        outlined
                        
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <span class="text-sm font-bold"
                        >Doctor Specialization</span
                      >

                      <v-text-field
                        v-model="specialization"
                        outlined
                        label="Specialization"
                        clearable
                        
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <span class="text-sm font-bold">Department No</span>
                      <v-text-field
                        v-model="dept_no"
                        outlined
                        label="Department No"
                        clearable
                      ></v-text-field>
                    </v-col>

                    
                  </v-row>
                </v-container>
              </v-form>
            </template>
          </v-card>

          <v-btn style="background-color: cyan; color: white" @click="e1 = 3">
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
                      v-for="(row, index) in doctor_appts"
                      :key="index"
                    >
                      <v-btn @click="remove(index)" class="ma-2" text color="indigo" style="position:absolute;right:0px;top:-25px;">
                        <v-icon left> mdi-minus </v-icon>
                        Remove
                      </v-btn>

                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold">Appointment Date</span>
                        <v-text-field
                          v-model="appt_timestamp_date"
                          label="Date"
                          clearable
                          outlined
                          type="date"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <span class="text-sm font-bold">Appointment Time</span>
                        <v-text-field
                          v-model="appt_timestamp_time"
                          label="Time"
                          clearable
                          outlined
                          type="time"
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
                              this.doctor_appts.length === 0
                                ? "Add Appointment"
                                : "Add Another Appointment"
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

          <v-btn style="background-color: cyan; color: white" @click="e1 = 1">
            Submit
          </v-btn>

          <v-btn text @click="e1 = 2"> Back </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      name: null,
      age: null,
      mobile: null,
      genders: ["Male", "Female"],
      gender: null,
      email: null,
      education:null,
      specialization: null,
      dept_no: null,
      address: null,
      doctor_appts: [],
    };
  },
  methods: {
    fun() {
      let data = {
       
        appt_timestamp_date: null,
        appt_timestamp_time:null,
        
      };
      this.doctor_appts.push(data);
    },
    remove(index){
      this.doctor_appts.splice(index,1)
    }
  },
};
</script>

<style scoped>
body>>> .v-application .primary {
  background: cyan !important;
  color: white;
  margin-right: 5px;
}
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
