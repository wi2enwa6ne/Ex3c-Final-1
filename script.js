function parseSourceParam() {
  
 const locString = window.location;
 console.log("locString=" + locString);

 const urlParams = new URLSearchParams(locString.search);
 var source = urlParams.get("source");
 console.log("source" + source);
//What is getElementById("skiText") doing ? what about .innerHTML?
 if ((source == "winterpark")) {
   map.setZoom(9);
   map.setCenter([-105.7748,39.8473]);
   document.getElementById("skiText").innerHTML = "Ski Area: Winter Park";
 }

 if ((source == "vail")) {
  map.setZoom(9);
  map.setCenter([-106.357514,39.635571]);
  //does zoom18 go to Vail or should it be (3)//
  document.getElementById("skiText").innerHTML = "Ski Area: Vail";
 }
}
// Add vail //



