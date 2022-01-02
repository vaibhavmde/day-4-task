/*Question 1
How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

Ans/code
*/

var obj1 = { name: "Person 1", age: 5 },
  obj2 = { age: 5, name: "Person 1" };

const isEqualObjects = (objOne, objTwo) => {
  const objOneKeys = Object.keys(objOne),      //object.keys function returns the keys in the object    
    objTwoKeys = Object.keys(objTwo);
  if (objOneKeys.length !== objTwoKeys.length) return false;  // checking both object having same no of keys

  objOneKeys.forEach((key) => {                
    if (!objTwo.hasOwnProperty(key)) return false;   //hasOwnProperty(key) check the key is present in object return boolean value
    if (objOne[key] !== objTwo[key]) return false;
  });

  return true;
};

console.log(isEqualObjects(obj1, obj2));

//output true

/*Question 2
Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

Ans/code
*/

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
   }
  }
};

 xhr.send();

/*
Use the same rest countries and print all countries name, region, sub region and population

Ans/code
*/
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
     console.log( `name:${user.name},region:${user.region},sub region:${user.subregion}, population:${user.population}`); 
   }
  }
};


