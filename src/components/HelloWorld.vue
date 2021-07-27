<template>
  <div class="hello">
    <button @click="fun1">Set doctors info</button>
    <button @click="fun2">Set doctors appt</button>
    <button @click="fun3">Set staffs info</button>
    <button @click="fun4">Set staffs history</button>
  </div>
</template>

<script>
import {
  setDoctorsInfo,
  setDoctorsAppt,
  setStaffsInfo,
  setStaffsHistory,
} from "../../firebase";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
