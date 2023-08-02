import * as firebase from "./firebase";
// async function fetchData() {
//     // const xhttp = new XMLHttpRequest();
//     // xhttp.onload = function() {
//     //     // document.getElementById("demo").innerHTML = this.responseText;
//     //     const record= this.responseText;
//     //     document.getElementById("date").innerHTML=record.data[0].date;
//     //     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     //     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     //     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
//     //     }
//     // xhttp.open("GET", "https://api.coronavirus.data.gov.uk/v1/data", true);
//     // xhttp.send();


//     // const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     // const record=await res.json();
//     // document.getElementById("date").innerHTML=record.data[0].date;
//     // document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();

// function getToken() {
//     // e.preventDefault();
//     grecaptcha.ready(function() {
//     console.log('ok');
//     grecaptcha.execute('', {action: 'submit'}).then(function(token) {
//           // Add your logic to submit to your backend server here.
//           console.log(token);
//       });
//     });
//   }
console.log(firebase);
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('site key', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
              console.log(token);
          });
        });
});
function onSubmit(token) {
    document.getElementById("demo-form").submit();
    console.log(token);
  }


//   function onloadCallback() {
//     alert("grecaptcha is ready!");
//   };

