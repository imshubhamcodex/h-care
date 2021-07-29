import firebase from "firebase";

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
  getTimestamp(new Date("03/07/1999")),
  getTimestamp(new Date("10/31/1997")),
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
};

let doctor1_appt = {
  doctor_id: doctor1_info.doctor_id,
  appts: apptsArr, // ---->  mm/dd/yyyy
  total_appts: apptsArr.length,
};

let doctor2_appt = {
  doctor_id: doctor2_info.doctor_id,
  appts: apptsArr, // ---->  mm/dd/yyyy
  total_appts: apptsArr.length,
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

let patient1_history = {
  patient_id: patient1_info.patient_id,
  hospital_name: "City hospital",
  disease: "stones",
  cost_of_treatment: "10000",
  admit_timestamp: [getTimestamp(new Date("03/08/1996"))],
  release_timestamp: [getTimestamp(new Date("09/08/1996"))],
  estimated_cost_in_h_care: "5000",
};

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
};
