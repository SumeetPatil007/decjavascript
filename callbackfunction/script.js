// function getDataFromAPI(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onload = function () {
//     // API finished and succeeded
//     callback(null, xhr.responseText);
//   };

//   xhr.onerror = function () {
//     // API failed
//     callback("Error fetching data", null);
//   };

//   xhr.send();
// }

// // Using the callback
// getDataFromAPI("https://api.example.com/data", function (err, data) {
//   if (err) {
//     console.log("API Error:", err);
//   } else {
//     console.log("API Response:", data);
  
// }
// });
// getDataFromAPI("GET /users
// Response: { "name": "John", "age": 25 }
// ",function(err,data){
//     if(arr){
//         console.log(api ,err)
//     }
// })
              //callback
+


function loadScript(src,callback){
  var script = document.createElement("script");
  script.src = src ; 
  script.onload = function(){
    console.log("sec"+ src);
    callback(null, src);
    
  }
  script.onerror = function(){
    console.log("Error loading script "+ src);
    callback (new Error("Src got errer"))
  }
  document.body.appendChild(script);
}
function hello(Error ,src){
  if(Error){
    console.log(Error)
    return
  }
  alert('hello worls'+ src)
}
function goodmor(){
  alert('gm')
}
loadScript("https://cdn.jsdelivr.ne/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",hello)






































