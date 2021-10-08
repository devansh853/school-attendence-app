import  firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDRi6FsV9YZjO1NQPq9kxNCNh5zLmwv3wo",
  authDomain: "school-attendence-8e572.firebaseapp.com",
  databaseURL: "https://school-attendence-8e572-default-rtdb.firebaseio.com",
  projectId: "school-attendence-8e572",
  storageBucket: "school-attendence-8e572.appspot.com",
  messagingSenderId: "836658480801",
  appId: "1:836658480801:web:75bec36f498fbf0cd2d2e0"
};
//initialize your database
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  