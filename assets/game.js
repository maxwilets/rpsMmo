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
      var clickCount= 0;
      var players = 0;
      var playersAr = [];
      function checkId(userId) {
          database.ref('/players').child(userId).once('value',
        function(snapshot){
            if (snapshot.exists()) {
                alert('this user exists')
            }
            else{
                database.ref('/players').child("/")
            }
        })
      }
      $('#add-user').on('click', function(e){
              e.preventDefault();
              var userId = $('#name-input').val().trim();
              console.log(userId)
              $('#top').empty();
              $('#top').html('<h3> Welcome, ' + userId + ' choose a fighter, then hit the submit! </h3>');
              players ++;
              checkId(userId);
              for (i=0; i < playersAr.length; i++) {
                  if (userId == playersAr[i]) {
                      console.log('youve been here before');
                  }
              }

              $('img').on('click', function(){
                 userChoice = $(this).attr('data-person');
                 console.log(userChoice);
                
                 $('#fighterBtn').on('click', function(){
                     console.log(userChoice);
                     finalChoice = userChoice;
                     console.log(finalChoice);
                     $('#top').empty();
                     $('#top').html('<h3> You chose ' +finalChoice +'</h3> <p> Now wait for the other player to make a choice </p>')
                    
                     playersAr.push(userId);
                    
                     database.ref('/players'+ userId).set(
                    {
                       userId : userId,
                       choice: finalChoice
                   }
                );
                 
                    }
                );
              
                
                }
            );
             
      })
           

})