$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyDd3xb85ZDBUe7EpJcHZwk31Mn51kiR-Tg",
        authDomain: "rockpaper-f90b6.firebaseapp.com",
        databaseURL: "https://rockpaper-f90b6.firebaseio.com",
        projectId: "rockpaper-f90b6",
        storageBucket: "rockpaper-f90b6.appspot.com",
        messagingSenderId: "103007121094"
      };
      firebase.initializeApp(config);
      var database = firebase.database();
})