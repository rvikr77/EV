
//Make text field required before searching
/*const submitBtn = document.getElementById('submit');
const uName = document.getElementById('search');
const checkEnableButton = () => {
  submitBtn.disabled = !(uName.value  !== 'Choose');
}
uName.addEventListener('change', checkEnableButton);*/
 //Enter to click button
 getPositionobject1('first');
/* var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("submit").click();
}});*/
//location retreiver
function getPositionobject1(objectid) {
			if (navigator.geolocation) {
				  var timeoutVal = 5*1000;
				  navigator.geolocation.watchPosition(
					function(position) {displayPosition(position, objectid)},
					displayError,
					{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
				  );
		}}

//send location data to global variable
		function displayPosition(position, objectid) {
		  //alert(objectid + " ##  Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
		  var geometry = (position.coords.latitude).toString();
      var geo=(position.coords.longitude).toString();
		  sendToServer(objectid,geometry,geo);
		}
//Errors while retreiving location
		function displayError(error) {
		  var errors = {
			1: 'Permission denied',
			2: 'Position unavailable',
			3: 'Request timeout'
		  };
		  alert("Error: " + errors[error.code]);
		}
      var a,b;
		function sendToServer(id,geom,g) {
			a=geom;
      b=g;
		}
//calc on search
function func(){
  //get user text
      var x=document.getElementById("search").value;
      //Database
      shops=[
        {id:0,data:{
          latitudes:13.007002761475542, 
          longitudes: 80.2533483685362,
          distance:0,
          "name":"Centre 1",
          "Battery":"20(Tata Nexon), 10(City)\n5(other general cars)",
          "Motor":"Bajaj Motor(2-100cc,5-750cc), Tata motors 7-350cc ",
          "Tyres":"10 small, 5medium, 7 large, MRF tyres,\n5 medium Apollo Tyres"
       }},
       {id:1, data:{
         latitudes:12.936973545461063,
         longitudes: 77.59047995677919,
         distance:0,
         "name":"Centre 2",
         "Battery":"20(Tata Nexon), 10(Tata Tigor)\n5(other general cars)",
         "Motor":"Bajaj Motor(2-100cc,5-750cc), Tata motors 7-350cc ",
         "Tyres":"10 small, 5medium, 7 large, MRF tyres,\n5 medium Apollo Tyres",
         "Chassis":"5 gear shifts(nano), 2 body parts(tesla model 3)"
       }},
        {id:2,data:{
         latitudes:13.009669526650567, 
          longitudes: 80.25200628707896,
          distance:0,
          "name":"Centre 3",
          "Battery":"20(MG hector), 10(Tata Tigor)\n5(other general cars)",
          "Motor":"Bajaj Motor(2-100cc,5-750cc), Tata motors 7-350cc ",
          "Tyres":"10 small, 5medium, 7 large, MRF tyres,\n5 medium Apollo Tyres",
          "Chassis":"5 gear shifts(MG hector), 2 body parts(tesla model 3)"
       }},
        {id:3,data:{
         latitudes:13.007250364262896,
          longitudes:80.25133336274796,
          distance:0,
          "name":"Centre 4",
          "Battery":"20(Nexa), 10(Venue)\n2(other general cars)",
          "Motor":"hyundai Motor(2-100cc,5-750cc), Tata motors 7-350cc ",
          "Tyres":"10 small, 5medium, 7 large, Hyundai tyres,\n5 medium Apollo Tyres",
          "Chassis":"5 gear shifts(hyundai pro), 2 body parts(tesla model 3)"
       }},
       {id:4,data:{
        latitudes:13.0072503642484699,
         longitudes:80.35133336274796,
         distance:0,
         "name":"Centre 5",
         "Battery":"20(Tata Nexon), 10(Tata Tigor)\n5(other general cars)",
         "Motor":"Bajaj Motor(2-100cc,5-750cc), Tata motors 7-350cc ",
         "Tyres":"5 medium Apollo Tyres",
         "Chassis":"5 gear shifts(MG hector), 2 body parts(tesla model 3)"
      }},
      {id:5,data:{
        latitudes:13.0072506423225090,
         longitudes:80.25233336274796,
         distance:0,
         "name":"Centre 6",
         "Battery":"20(Tata Nexon), 10(Tata Tigor)\n5(other general cars)",
         "Tyres":"10 small, 5medium, 7 large, MRF tyres,\n5 medium Apollo Tyres",
         "Chassis":"5 gear shifts(MG hector), 2 body parts(tesla model 3)"
      }},
        {id:6,data:{
         latitudes:13.00592928087087129,
          longitudes: 80.25171693792989,
          distance:0,
          "name":"Centre 7",
          "Tyres":"10 small, 5medium, 7 large, MRF tyres,\n5 medium Apollo Tyres",
          "Chassis":"5 gear shifts(Mahindra EV), 2 body parts(tesla model x)"
       }}];
//Check if location enabled
      if(!a)
       {alert('allow location to proceed,accept location and reload page');return;}
      document.getElementById("demo").style.display="block";
      
      //Find distance
    for(let ra of shops){
        lat1=parseFloat(a);
        lon1=parseFloat(b);
        lat2=ra.data.latitudes;
        lon2=ra.data.longitudes;
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let aa = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
        let c = 2 * Math.asin(Math.sqrt(aa));
        let r = 6371;
        ra.data.distance=c*r;
       }
  //Sort by distance
shops.sort((ad, bd) => (ad.data.distance > bd.data.distance) ? 1 : ((bd.data.distance > ad.data.distance) ? -1 : 0));     
     //If items available,display
      var w=0;
      
      for(let k of shops){
        if(w==5)break;
        let machine = k.data[x];
        if(machine){
        document.getElementById(`demo${w}`).innerHTML
        =`<p style='font-style:bold;font-size:20px'>`+k.data["name"]+
        ` </p>`+
        `<img style='cursor:text;align:right;height:20px;width:20px'src='./images/arrow.png'><span> `
        +k.data.distance.toFixed(2)+" km from here</span><hr><p style='color:purple;'>"+x+" - "+machine+
        `</p><a style='font-family:Comfortaa;'href='shop${w}.html' target='_self'>`
        +"View all other products</a><br>";
        w++;
        }
        else{
          document.getElementById(`demo${w}`).innerHTML
          ="Oops try again !";
        }
      }
      
    }
    //till here time complexity O(nlog(n))
