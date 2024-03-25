let obj1={ name: "person1", age:5};
let obj2={ age:5, name:"person1"};

function areObjectEqual(obj1, obj2){

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2); 

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1){
        if(obj1[key] !== obj2[key]) {
             return false;
        }
    }
    return true;
}
console.log(areObjectEqual(obj1,(obj2)));

console.log("***************************************************************************");

var xhr = new XMLHttpRequest();// create object
xhr.open("GET", "https://restcountries.com/v3.1/all",true);//open url
// load response
xhr.onload = function () {
//    console.log("XMLHttpRequest - status", xhr.status);
var countries = JSON.parse(xhr.responseText);
countries.forEach((country) => {
   console.log(country.name.common + ":" + country.flag + ":" + country.region + ":" + country.subregion +":" + country.population);
   

});


};
xhr.send();//send