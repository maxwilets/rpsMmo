$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyDd3xb85ZDBUe7EpJcHZwk31Mn51kiR-Tg",
        authDomain: "rockpaper-f90b6.firebaseapp.com",
        databaseURL: "https://rockpaper-f90b6.firebaseio.com",
        projectId: "rockpaper-f90b6",
        storageBucket: "rockpaper-f90b6.appspot.com",
        messagingSenderId: "103007121094"
      };
      var playerName;
      playerz = 0;

      firebase.initializeApp(config);
      var database = firebase.database();
       userName = 0
      var player = {
          player1: {
              name: 0,
              play: 1
          },
        
          player2:{
              name: 0,
              play: 1

          },
          plays: {
              myTurn: 1,
              opTurn: 1
          },
          wins: {
              myWins: 0,
              yourWin: 0,
              ties: 0
          },
          oppName: null
      };

      
        nameUp = function(){
            if (player.player1.name === 0){
            $('#add-user').on('click', function(){
                console.log('cat')
                playerz++;
                userName = $('#name-input').val().trim();
                console.log(userName);
                player.player1.name = userName;
                console.log(player.player1.name)
               database.ref().set({
                    player1: {
                       name: userName,
                       play: 0
                    }
                   }
               )
            })
        }
         else if((player.player1.name !== 0) && (player.player.name ===0)){
             $('#add-user').on('click', function(){
                 console.log('dog')
                 userName= $('#name-input').val().trim();
                 database.ref().set({
                     player2: {
                         name: userName,
                         play: 0
                     }
                 })
             })
         }  
        }
      
     console.log('test1')
     var connectionsRef = database.ref('/connection');

     var connectedRef = database.ref('.info/connected');

 //    connectedRef.on('value', function(snap) {
 //        if (snap.val()) {
 //            var con = connectionsRef.push(true);

 //            con.onDisconnect().remove();
 //        }
 //    });
 //     connectionsRef.on('value', function(snap){
 //      numberP = (snap.numChildren());
 //       $('#you').text(numberP);
  //    });
  //  

     
     
   
  
   nameUp();
    })
