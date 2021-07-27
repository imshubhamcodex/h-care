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

export { setDoctorsInfo, setDoctorsAppt, setStaffsHistory, setStaffsInfo };
