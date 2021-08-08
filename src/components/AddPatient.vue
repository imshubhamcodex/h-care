<template>
  <v-stepper style="border-top: 1px solid grey" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="100%">
          <template>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                  <span class="text-sm font-bold">Patient Name</span>
                    <v-text-field
                      v-model="name"
                      label="Name"
                      clearable
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                  <span class="text-sm font-bold">Patient Age</span>

                    <v-text-field
                      v-model="age"
                      outlined
                      label="Age"
                      clearable
                      type="number"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                  <span class="text-sm">Your Name</span>
                    <v-text-field
                      v-model="message3"
                      outlined
                      label="Filled"
                      clearable
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                  <span class="text-sm">Your Name</span>
                    <v-text-field
                      v-model="message4"
                      label="Outlined"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
        </v-card>

        <v-btn style="background-color: purple; color: white" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn style="background-color: purple; color: white" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn style="background-color: purple; color: white" @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      name:null,
      message2:null,
      message3:null,
      message4:null
    };
  },
};
</script>

<style>
.primary {
  background: purple;
  color: white;
  margin-right: 5px;
}
.v-stepper__step__step {
  margin-right: 5px;
}
.v-label--active{
    margin-left: -12px;
}
</style>
