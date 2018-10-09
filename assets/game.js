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
    userName2= ''
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
                $('#top').html('<h3> Welcome, ' +userName + ' to Knight, Ninja Mage!' + '<h3>' + "<p class='winn'> wins: " + win1 + '</p>' + 
                     "<p class= 'losss'> Loss: " + loss1 + '</p>')
                player1 = true;
              //  check();
           
            }
            else if((snapshot.child('player').child(1).exists()=== true) &&
               ((snapshot.child('player').child(2).exists()=== false))){
                userName2= userName  
                database.ref('player/2').set({
                       name: userName2,
                       win: win2,
                       loss: loss2
                   })
                    player2 = true;
                   $('#top').empty();
                   player1 = false;
                
                $('#top').html('<h3> Welcome, ' +userName + ' to Knight, Ninja, Mage!' + "<p> You're opponet is" + snapshot.child('player/1').val().name +
                "<p class = 'winn'> wins: "+ win2+ "<p class='losss'> Loss: " + loss2+ '</p>'+'<h3>'
             );
                   
            }
               else if ((snapshot.child('player').child(1).exists()) && (snapshot.child('player').child(2).exists())){
                   alert('too many people in the game room')
               }
        })
      console.log(player1)
   
        })
        
  
      database.ref().on('value', function(snapshot){
 
          if (userName == snapshot.child('player/1').val().name){
              console.log('you got it!')
              player1 = true
              
          }
          else if(userName === snapshot.child('player/2').val().name){
              console.log('my man!');
              player2 = true;
              userName2 = userName
          }
          //decide();
        })
          //calls the decide function, having scope issues unless the functions are nested
  //check
 database.ref().on('value', function(snapshot){
$('#chatSub').on('click', function(){
    message = $('#chat-input').val();
    console.log(message)
    if (player1 == true){
        database.ref().on('value', function(snapshot){
            database.ref('player1message').set({
                message: message
            })
           
        })
    }
     if (player2 == true){
        database.ref().on('value', function(snapshot){
            database.ref('2mes').set({
                message: message
            })
        })
    }
})
 })
database.ref().on('value', function(snapshot){
    
    $('.messages').append("<h3 style='background-color: green'>"+snapshot.child('player1message').val().message + '</h3>')
     
    
 })

 database.ref().on('value', function(snapshot){
    
     $('.messages').append("<h3 style = 'background-color: blue'>" +snapshot.child('2mes').val().message+ '</h3>')
    
  
 })
    var rps = function(){
        
        database.ref().once('value', function(snapshot){
             userName2 = snapshot.child('player/2').val().name;
             userName1= snapshot.child('player/1').val().name;
        if ((snapshot.child('player/1').val().selection1 == 'knight') && (snapshot.child('player/2').val().selection2 == 'mage')){
            win1 ++;
            loss2 ++;
            console.log('plaer1 winz');
            $('#you').empty();
            $('#you').html('<h3>' + snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2  + '</p> </h3>')
            $("#me").html('<h3> Knight Beats Mage </h3>')
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });
            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
           
            if (player1 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
               }
               else if(player2 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p> Loss: ' +loss2 +'</p> </h3>')
               }
        }
        else if((snapshot.child('player/1').val().selection1 == 'knight') && (snapshot.child('player/2').val().selection2 == 'ninja')){
            win2 ++;
            loss1 ++;
            console.log('player 2 wins');
            $('#you').empty();
            $('#you').html('<h3>' + snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2  + '</p> </h3>')
            $('#me').html('<h3> Ninja Beats Knight </h3>')
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });
            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
            if (player1 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
               }
               else if(player2 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p> Loss: ' +loss2 +'</p> </h3>')
               }
        }

        else if((snapshot.child('player/1').val().selection1 == 'ninja') && (snapshot.child('player/2').val().selection2 == 'knight')){
            win1 ++;
            loss2 ++;
           // console.log(win)
           $('#you').empty();
           $('#you').html('<h3>' + snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2  + '</p> </h3>')
        $('#me').html('<h3> Ninja Beats Knight </h3>')
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });
            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
           if (player1 == true){
            $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
           }
           else if(player2 == true){
            $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p> Loss: ' +loss2 +'</p> </h3>')
           }
        }
        else if ((snapshot.child('player/1').val().selection1 == 'ninja') && (snapshot.child('player/2').val().selection2 == 'mage')){
            win2 ++;
            loss1 ++;
            $('#you').empty();
            $('#you').html('<h3>' + snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2  + '</p> </h3>')
           $('#me').html('<h3> Mage Beats Ninja </h3>')
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });
            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
            if (player1 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
               }
               else if(player2 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p> Loss: ' +loss2 +'</p> </h3>')
               }
        }
        else if ((snapshot.child('player/1').val().selection1 == 'mage') && (snapshot.child('player/2').val().selection2 == 'ninja')){
            win1 ++;
            loss2 ++;
            $('#you').empty();
            $('#you').html('<h3>' + snapshot.child('player/1').val().name + 'chose' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + 'chose' + snapshot.child('player/2').val().selection2  + '</p> </h3>')
            $('#me').html('<h3> Mage Beats Ninja </h3>')
            console.log(win1)
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });
            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
            if (player1 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
               }
               else if(player2 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p > Loss: ' +loss2 +'</p> </h3>')
               }
        }
        else if ((snapshot.child('player/1').val().selection1 == 'mage') && (snapshot.child('player/2').val().selection2 == 'knight')){
            win2++;
            loss1 ++;
            $('#you').empty();
            $('#you').html('<h3>' + snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1 +
            '<p>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2 + '</p> </h3>')
            $('#me').html('Knight beats Mage </h3>')
            console.log(win2)
            database.ref('player/1').set({
                name: userName1,
               win: win1,
               loss: loss1
            });

            database.ref('player/2').set({
                name: userName2,
                win: win2,
                loss: loss2
            })
            if (player1 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win1 + '</p> <p> Loss: ' +loss1 +'</p> </h3>')
               }
               else if(player2 == true){
                $('#top').html('<h3> Choose another character to play again <p> Wins: ' + win2 + '</p> <p> Loss: ' +loss2 +'</p> </h3>')
               }
        }
       
      else if (snapshot.child('player/1').val().selection1 == snapshot.child('player/2').val().selection2){
          $('#you').html('<h3> The result was a tie! </h3>')
      }
    })
    } 
   //var decide= function(){
        $('.card-img-top').on('click', function(){
        var selection = $(this).attr('data-person')
        console.log(selection)
    

    $("#fighterBtn").on('click', function(){
        database.ref().on('value', function(snapshot){
            userName2 = snapshot.child('player/2').val().name;
            console.log(player1);
            console.log(player2)
        })
        if (player2 === true){
            selection2 = selection;
            database.ref('player/2').set({
               selection2: selection2,
               name: userName2,
               win: win2,
               loss: loss2,
               player2ready: true
            })
            
         var choiceSet1 = true;  
           // $('#me').append('<h2> Hi' +snapshot.child('player/1').val().selection1 +'</h2>')
          selection = '' 
        }
        else {
                selection1 = selection;
                database.ref('player/1').set({
                    selection1: selection1,
                    name: userName,
                    win: win1,
                    loss: loss1,
                    player1ready: true
                })
            var choiceSet2 = true;
            selection = ''
        }
       
      
        })
    })
//}; //decide
var ready = firebase.database().ref('player').orderByKey();
database.ref().on('value', function(snapshot){
   // snapshot.forEach(function(childsnap){//
        if ((snapshot.child('player/1').val().player1ready == true) && (snapshot.child('player/2').val().player2ready == true)){
        //    $('#me').html('<h3>'+snapshot.child('player/1').val().name + ' chose ' + snapshot.child('player/1').val().selection1+'</h3>');
        //    $('#you').html('<h3>' + snapshot.child('player/2').val().name + ' chose ' + snapshot.child('player/2').val().selection2+ '</h3>')

            rps();
     
        }

      //  else if ((snapshot.child('player/1').val().player1ready==true) && (snapshot.child('player/2').val().player2ready != true)){
         
       //     $('#you').html('<h3> Waiting for ' + snapshot.child('player/2').val().name + ' to make their choice')
      //  }

      //  else if ((snapshot.child('player/1').val().player1ready!=true) && (snapshot.child('player/2').val().player2ready == true)){
       //     $('#you').html('<h3> Waiting for ' + snapshot.child('player/1').val().name + ' to make their choice')
       // }
    //    })//


})

var step2 =function(){ database.ref().on('value' , function(snapshot){


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
    })//disconnect
   
    })//document ready
