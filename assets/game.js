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
      
    var win1 = 0;
    var loss1 = 0;
    var win2 = 0;
    var loss2 = 0;
    userName = '';
   var player1;
   var player2;

    $('#add-user').on('click', function(){
        userName = $('#name-input').val().trim();
        console.log('test')

        database.ref().once('value').then(function(snapshot){

            if((snapshot.child('player').child(1).exists()) ===false) {
                database.ref('player/1').set({
                    name: userName,
                   win: win1,
                   loss: loss1
                });
                $('#top').empty();
                $('#top').html('<h3> Welcome, ' +userName + ' to Knight, Ninja Mage!' + '<h3>' + '<p> wins: ')
                player1 = true;
                check();
           
            }
            else if((snapshot.child('player').child(1).exists()=== true) &&
               ((snapshot.child('player').child(2).exists()=== false))){
                   database.ref('player/2').set({
                       name: userName,
                       win: win2,
                       loss: loss2
                   })

                   $('#top').empty();
                   player1 = false
                $('#top').html('<h3> Welcome, ' +userName + ' to Knight, Ninja Mage!' + "<p> You're opponet is" + snapshot.child('player/1').val().name +'<h3>' );
                check();   
            }
               else if ((snapshot.child('player').child(1).exists()) && (snapshot.child('player').child(2).exists())){
                   alert('too many people in the game room')
               }
        })
      console.log(player1)
   
        })
        
  var check = function(){
      database.ref().on('value', function(snapshot){
          console.log('almost');
          console.log(userName)
          if (userName == snapshot.child('player/1').val().name){
              console.log('you got it!')
              player1 = true
          }
          else if(userName === snapshot.child('player/2').val().name){
              console.log('my man!');
              player2 = true;
          }
     
        })
        decide();
  }

    var rps = function(){
        if ((selection1 == 'knight') && (selection2 == 'mage')){
            win1 ++;
            console.log('plaer1 winz');
        }
        else if((selection1 == 'knight') && (selection2 == 'ninja')){
            win2 ++;
            console.log('player 2 wins')
        }

        else if((selection1 =='ninja') && (selection2 == 'knight')){
            win1 ++
            console.log(win)
        }
        else if ((selection1 == 'ninja') && (selection2 == 'mage')){
            win2 ++;
            console.log(win2)
        }
        else if ((selection1 == 'mage') && (selection2 == 'ninja')){
            win1 ++;
            console.log(win1)
        }
        else if ((selection1 =='mage') && (selection2 == 'knight')){
            win2++;
            console.log(win2)
        }
    } 
   var decide= function(){ $('.card-img-top').on('click', function(){
        var selection = $(this).attr('data-person')
        console.log(selection)
    

    $("#fighterBtn").on('click', function(){
        console.log('hi')
        if (player1 === true){
            selection1 = selection;
            database.ref('player/1').set({
                selection1: selection1,
                name: userName,
                win: win1,
                loss: loss1
            })

               
           // $('#me').append('<h2> Hi' +snapshot.child('player/1').val().selection1 +'</h2>')
           
        }
        else if(player2 === true){
            selection2 = selection;
            database.ref('player/2').set({
               selection2: selection2,
               name: userName,
               win: win2,
               loss: loss2
            })
        }
       

        })
    })
}

    database.ref().on('value', function(snapshot){

        var disconnect = function(){
            if(userName != '') {
                if ((snapshot.child('player').child(1).exists()) && (userName == snapshot.child('player').child(1).val().name)){
                    database.ref('/chat').onDisconnect().update({
                        message: '',
                        dateAdded: ''
                    })
                database.ref('player/1').onDisconnect().remove();

        
                }
                else if((snapshot.child('players').child(2).exists()) && (userName == snapshot.child('player').chid(2).val().name)){
                    database.ref('/chat').onDisconnect().update({
                        message: '',
                        dateAdded: ''

                    });
                }
            }
        }
    })

    })
