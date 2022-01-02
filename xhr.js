
var xhr = new XMLHttpRequest();

// Open a request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response);
    // console.log(xhr.response);
    for (let i = 0; i < data.length; i++) {
      let user = data[i];
     console.log(user.flag);
     console.log( `name:${user.name},region:${user.region},sub region:${user.subregion}, population:${user.population}`); 
   }
  }
};

 xhr.send();










