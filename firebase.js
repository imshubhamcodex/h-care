import firebase from "firebase";
import store from "./src/store/index.js";

var firebaseConfig = {
  apiKey: "AIzaSyA_VSxNX8oQ9KhxgvWhcK5pU2daSUHV1oc",
  authDomain: "h-care-a19b1.firebaseapp.com",
  projectId: "h-care-a19b1",
  storageBucket: "h-care-a19b1.appspot.com",
  messagingSenderId: "880269586958",
  appId: "1:880269586958:web:7805037fb37a3236c9025f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// For unique ID generation
const generateUniqueId = require("generate-unique-id");
function UID(len) {
  return generateUniqueId({
    length: len,
    useLetters: false,
  });
}

function getTimestamp(date) {
  return firebase.firestore.Timestamp.fromDate(date);
}

let apptsArr = [
  { ts: getTimestamp(new Date("03/07/1999")), total_appts: 4 },
  { ts: getTimestamp(new Date("10/31/1997")), total_appts: 1 },
]; // ---->  mm/dd/yyyy

let involvmentsArr = [
  getTimestamp(new Date("03/07/1999")),
  getTimestamp(new Date("10/31/1997")),
];

let doctor1_info = {
  doctor_id: UID(10),
  name: "tanvi",
  age: "100",
  mobile: "9876543211",
  gender: "female",
  email: "tanvi@hahaha.com",
  spec: "neurologist",
  education: "mbbs md",
  no_of_patients: "0",
  dept_no: "10",
  salary: 30000,
  rating: 10,
};

let doctor2_info = {
  doctor_id: UID(10),
  name: "shubham",
  age: "100",
  mobile: "9876543210",
  gender: "male",
  email: "shubham@boss.com",
  spec: "cardiologist",
  education: "mbbs",
  no_of_patients: "0",
  dept_no: "2",
  salary: 10000,
  rating: 5,
};

let doctor1_appt = {
  doctor_id: doctor1_info.doctor_id,
  appts: apptsArr, // ---->  mm/dd/yyyy
};

let doctor2_appt = {
  doctor_id: doctor2_info.doctor_id,
  appts: apptsArr, // ---->  mm/dd/yyyy
};

async function setDoctorsInfo() {
  await firebase
    .firestore()
    .collection("doctors")
    .doc("doctors_info")
    .set(
      {
        [doctor1_info.doctor_id]: doctor1_info,
        [doctor2_info.doctor_id]: doctor2_info,
      },
      { merge: true }
    );
}

async function setDoctorsAppt() {
  await firebase
    .firestore()
    .collection("doctors")
    .doc("doctors_appt")
    .set(
      {
        [doctor1_appt.doctor_id]: doctor1_appt,
        [doctor2_appt.doctor_id]: doctor2_appt,
      },
      { merge: true }
    );
}

//-------------------------------------------------------//

let staff1_info = {
  staff_id: UID(5),
  name: "tanvi",
  age: "10",
  gender: "female",
  address: "Haryana India Asia Earth",
  email: "tanvi@developer.com",
  salary: "1.00",
  dept_id: "1",
  mobile: "9876543211",
};

let staff2_info = {
  staff_id: UID(5),
  name: "shubham",
  age: "99",
  gender: "male",
  address: "Bihar India Asia Earth",
  email: "shubham@staff.com",
  salary: "0.00",
  dept_id: "99",
  mobile: "9876543222",
};

let staff1_history = {
  staff_id: staff1_info.staff_id,
  joining: [getTimestamp(new Date("03/07/1999"))],
  release: [getTimestamp(new Date("03/07/2000"))],
};

let staff2_history = {
  staff_id: staff2_info.staff_id,
  joining: [getTimestamp(new Date("03/07/1999"))],
  release: [getTimestamp(new Date("03/07/2001"))],
};

async function setStaffsInfo() {
  await firebase
    .firestore()
    .collection("staffs")
    .doc("staffs_info")
    .set(
      {
        [staff1_info.staff_id]: staff1_info,
        [staff2_info.staff_id]: staff2_info,
      },
      { merge: true }
    );
}

async function setStaffsHistory() {
  await firebase
    .firestore()
    .collection("staffs")
    .doc("staffs_history")
    .set(
      {
        [staff1_history.staff_id]: staff1_history,
        [staff2_history.staff_id]: staff2_history,
      },
      { merge: true }
    );
}

//---------------------------------------------------------------------//

let patient1_info = {
  patient_id: UID(10),
  name: "preeti",
  age: "25",
  mobile: "9876544232",
  gender: "female",
  email: "preeti@hahaha.com",
  admit_timestamp: [getTimestamp(new Date("03/07/1999"))],
  release_timestamp: [getTimestamp(new Date("07/07/1999"))],
  address: "modeltown",
  problem: "severe headache",
  doctor_id: "10",
};

let patient2_info = {
  patient_id: UID(15),
  name: "kabir",
  age: "30",
  mobile: "9876543212",
  gender: "male",
  email: "kabir@boss.com",
  admit_timestamp: [getTimestamp(new Date("03/08/1999"))],
  release_timestamp: [getTimestamp(new Date("07/08/1999"))],
  address: "karol bagh delhi",
  problem: "severe stomachache",
  doctor_id: "10",
};

let patient1_history = [
  {
    patient_id: patient1_info.patient_id,
    hospital_name: "City hospital",
    disease: "stones",
    cost_of_treatment: "10000",
    admit_timestamp: [getTimestamp(new Date("03/08/1996"))],
    release_timestamp: [getTimestamp(new Date("09/08/1996"))],
    estimated_cost_in_h_care: "5000",
  },
  {
    patient_id: patient2_info.patient_id,
    hospital_name: "City hospital",
    disease: "migrain",
    cost_of_treatment: "8000",
    admit_timestamp: [getTimestamp(new Date("03/09/1997"))],
    release_timestamp: [getTimestamp(new Date("08/09/1997"))],
    estimated_cost_in_h_care: "6000",
  },
];

let patient2_history = {
  patient_id: patient2_info.patient_id,
  hospital_name: "City hospital",
  disease: "migrain",
  cost_of_treatment: "8000",
  admit_timestamp: [getTimestamp(new Date("03/09/1997"))],
  release_timestamp: [getTimestamp(new Date("08/09/1997"))],
  estimated_cost_in_h_care: "6000",
};

async function setPatientsInfo() {
  await firebase
    .firestore()
    .collection("patients")
    .doc("patients_info")
    .set(
      {
        [patient1_info.patient_id]: patient1_info,
        [patient2_info.patient_id]: patient2_info,
      },
      { merge: true }
    );
}

async function setPatientsHistory() {
  await firebase
    .firestore()
    .collection("patients")
    .doc("patients_history")
    .set(
      {
        [patient1_history.patient_id]: patient1_history,
        [patient2_history.patient_id]: patient2_history,
      },
      { merge: true }
    );
}

//---------------------------------------------------------//
let dept1_doctors = ["16", "17", "18"];
let dept2_doctors = ["19", "27", "38"];
let department1_info = {
  dept_id: UID(12),
  name: "cardiology",
};
let department2_info = {
  dept_id: UID(13),
  name: "neurology",
};

let department1_doctors = {
  dept_id: UID(12),
  doctor_id: dept1_doctors,
};
let department2_doctors = {
  dept_id: UID(13),
  doctor_id: dept2_doctors,
};

let department1_freq = {
  dept_id: UID(12),
  freq: "20",
};
let department2_freq = {
  dept_id: UID(13),
  freq: "30",
};

let department1_involvment = {
  dept_id: UID(12),
  involvment: involvmentsArr,
};
let department2_involvment = {
  dept_id: UID(13),
  involvment: involvmentsArr,
};

async function setDepartmentsInfo() {
  await firebase
    .firestore()
    .collection("departments")
    .doc("departments_info")
    .set(
      {
        [department1_info.dept_id]: department1_info,
        [department2_info.dept_id]: department2_info,
      },
      { merge: true }
    );
}

async function setDepartmentsDoctors() {
  await firebase
    .firestore()
    .collection("departments")
    .doc("departments_doctors")
    .set(
      {
        [department1_doctors.dept_id]: department1_doctors,
        [department2_doctors.dept_id]: department2_doctors,
      },
      { merge: true }
    );
}

async function setDepartmentsFrequency() {
  await firebase
    .firestore()
    .collection("departments")
    .doc("departments_frequency")
    .set(
      {
        [department1_freq.dept_id]: department1_freq,
        [department2_freq.dept_id]: department2_freq,
      },
      { merge: true }
    );
}

async function setDepartmentsInvolments() {
  await firebase
    .firestore()
    .collection("departments")
    .doc("departments_involvments")
    .set(
      {
        [department1_involvment.dept_id]: department1_involvment,
        [department2_involvment.dept_id]: department2_involvment,
      },
      { merge: true }
    );
}

export {
  setDoctorsInfo,
  setDoctorsAppt,
  setStaffsHistory,
  setStaffsInfo,
  setPatientsInfo,
  setPatientsHistory,
  setDepartmentsInfo,
  setDepartmentsDoctors,
  setDepartmentsFrequency,
  setDepartmentsInvolments,
  getDoctors,
  getDepartments,
  getPatients,
  getSttafs,
};

//-----------------Fetching DB ------------------------------------------------------------//
const db = firebase.firestore();

async function getDoctors() {
  await db
    .collection("doctors")
    .get()
    .then((res) => {
      const doctors = res.docs.map((doc) => doc.data());
      let doctors_appt = doctors[0];

      // co-ordinates
      let doctors_apptX = [];
      let doctors_apptY = [];

      // all dates
      let dates = [];

      //setting each dates
      Object.keys(doctors_appt).forEach((ele) => {
        doctors_appt[ele].appts.forEach((appt) => {
          dates.push({ total: appt.total_appts, date: appt.ts.toDate() });
        });
      });

      // sorting dates
      dates.sort((a, b) => b.date - a.date);

      // setting X and Y co-ordinates
      dates.forEach((obj) => {
        doctors_apptX.push(
          obj.date.toString().substring(4, 10) +
            " " +
            obj.date.toString().substring(16, 21)
        );
        doctors_apptY.push(obj.total);
      });

      let doctors_info = doctors[1];
      // number of male doctors
      let male_doctors = 0;

      // number of female doctors
      let female_doctors = 0;

      // specs array
      let specs = [
        "cardiologist",
        "neurologist",
        "rehabilitation",
        "surgeon",
        "radiologist",
        "dietary",
      ];
      // initilizing each quantity with zero, all these correspond to specs array
      let no_of_doctors = [0, 0, 0, 0, 0, 0];
      let doctors_per_department = [0, 0, 0, 0, 0, 0];
      let sum_of_salaries = [0, 0, 0, 0, 0, 0];
      let avg_salaries = [0, 0, 0, 0, 0, 0];
      let sum_of_ratings = [0, 0, 0, 0, 0, 0];
      let avg_ratings = [0, 0, 0, 0, 0, 0];

      Object.keys(doctors_info).forEach((ele) => {
        if (doctors_info[ele].gender === "male") male_doctors++;
        else female_doctors++;

        if (specs.indexOf(doctors_info[ele].spec) >= 0) {
          no_of_doctors[specs.indexOf(doctors_info[ele].spec)]++;
        }

        if (specs.indexOf(doctors_info[ele].spec) >= 0) {
          sum_of_salaries[specs.indexOf(doctors_info[ele].spec)] += Number(
            doctors_info[ele].salary
          );
        }

        if (specs.indexOf(doctors_info[ele].spec) >= 0) {
          sum_of_ratings[specs.indexOf(doctors_info[ele].spec)] += Number(
            doctors_info[ele].rating
          );
        }
      });

      // finding average of salaries
      sum_of_salaries.forEach((ele, index) => {
        if (no_of_doctors[index] > 0) {
          avg_salaries[index] = ele / (parseInt(no_of_doctors) * 1000);
        }
      });

      // finding average of ratings
      sum_of_ratings.forEach((ele, index) => {
        if (no_of_doctors[index] > 0) {
          avg_ratings[index] = ele / parseInt(no_of_doctors);
        }
      });

      // inside doctors_appt
      Object.keys(doctors_appt).forEach((ele) => {
        let doctor_id = doctors_appt[ele].doctor_id;
        // inside doctors_info
        Object.keys(doctors_info).forEach((item) => {
          // if id matches
          if (doctors_info[item].doctor_id === doctor_id) {
            if (specs.indexOf(doctors_info[item].spec) >= 0) {
              let appts = 0;
              // for each appts
              doctors_appt[ele].appts.forEach((ele) => {
                // add total number of appts
                appts = appts + Number(ele.total_appts);
              });
              doctors_per_department[specs.indexOf(doctors_info[item].spec)] =
                appts;
            }
          }
        });
      });

      let doctors_details = {
        doctors_apptX,
        doctors_apptY,
        female_doctors,
        male_doctors,
        no_of_doctors,
        doctors_per_department,
        avg_salaries,
        avg_ratings,
      };

      store.commit({
        type: "setDoctors",
        doctors_details,
      });
    });
}

function getDepartments() {
  db.collection("departments")
    .get()
    .then((res) => {
      const departments = res.docs.map((doc) => doc.data());
      console.log(departments);
    });
}
function getPatients() {
  db.collection("patients")
    .get()
    .then((res) => {
      const patients = res.docs.map((doc) => doc.data());
      console.log(patients);
    });
}
function getSttafs() {
  db.collection("staffs")
    .get()
    .then((res) => {
      const staffs = res.docs.map((doc) => doc.data());
      console.log(staffs);
    });
}
