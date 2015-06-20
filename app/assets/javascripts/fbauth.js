$(document).on('page:change', function(){

  var ref = new Firebase("https://dbcwhereto.firebaseIO.com");
  ref.unauth();
  console.log(ref);
  var fbData;
  var userData;
  var baseUrl = 'http://localhost:3000/'

// Target login button and trigger fbAuth promise
  $('#login').on('click', function(e){
    e.preventDefault();
    // console.log('hi');
    // fbAuth().then(function(authData){
    //   console.log(authData);
    //   // fbData = authData;
    //   // var fbString = JSON.stringify(authData);
    //   // console.log(fbString);
    //   // window.localStorage.setItem("fbData", fbString);
    //   //ajaxLogin(authData);
    //   //setProfile(authData);
    // }).catch(function(error){
    //   console.log(error);
    // })
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log(authData.facebook);
        console.log(authData.facebook.email);
      }
    }, { scope: "email" });
  });

// Instantiate fbAuth, a function that returns a promise
// var fbAuth = function(){
//   var promise = new Promise(function(resolve, reject){
//     ref.authWithOAuthPopup("facebook", function(error, authData) {
//       if (error) {
//         alert("login failed!");
//         reject(error);
//       } else {
//         console.log(authData.facebook.accessToken);
//         resolve(authData);
//       }
//     }, {
//       remember: "sessionOnly", // set session only
//       scope: "email, user_likes" // the permissions requested
//     });
//   })
//   return promise;
// };


})

