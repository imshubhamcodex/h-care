<template>
  <div class="hello">
    <v-btn @click="fun1">Set doctors info</v-btn>
    <v-btn @click="fun2">Set doctors appt</v-btn>
    <v-btn @click="fun3">Set staffs info</v-btn>
    <v-btn @click="fun4">Set staffs history</v-btn>
    <v-btn @click="fun5">Set patients info</v-btn><br />
    <v-btn @click="fun6">Set patients history</v-btn>
    <v-btn @click="fun7">Set departments info</v-btn>
    <v-btn @click="fun8">Set departments doctors</v-btn>
    <v-btn @click="fun9">Set departments frequency</v-btn>
    <v-btn @click="fun10">Set departments involvment</v-btn>
  </div>
</template>

<script>
import {
  setDoctorsInfo,
  setDoctorsAppt,
  setStaffsInfo,
  setStaffsHistory,
  setPatientsInfo,
  setPatientsHistory,
  setDepartmentsInfo,
  setDepartmentsDoctors,
  setDepartmentsFrequency,
  setDepartmentsInvolments,
} from "../../firebase";
export default {
  name: "HelloWorld",
  methods: {
    fun1() {
      setDoctorsInfo();
    },
    fun2() {
      setDoctorsAppt();
    },
    fun3() {
      setStaffsInfo();
    },
    fun4() {
      setStaffsHistory();
    },
    fun5() {
      setPatientsInfo();
    },
    fun6() {
      setPatientsHistory();
    },
    fun7() {
      setDepartmentsInfo();
    },
    fun8() {
      setDepartmentsDoctors();
    },
    fun9() {
      setDepartmentsFrequency();
    },
    fun10() {
      setDepartmentsInvolments();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
