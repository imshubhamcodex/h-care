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

async function test() {
  await firebase
    .firestore()
    .collection("doctors")
    .get()
    .then((res) => {
      console.log(res.docs[0].data());
    });
}
export default test;
