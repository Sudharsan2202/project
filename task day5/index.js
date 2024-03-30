let myResume={
  "basics": {
    "name": "sudhansran",
    "email": "iamsudhan.sudharsan2002@gamil.com",
    "phone": 6369610967,
    "degree": "BCA",
    "location": {
      "address": "27 vm Nagar,muthu plot, maniyanoor",
      "postalCode": 636010,
      "city": "salem",
      "state": "Tamilnadu",
      "country": "India"
    },
    "profiles": [
      {
        "website": "www.linkedin.com/in/Sudharsan-tj-735427296",
        "github":"https://github.com/Sudharsan2202/test2"
      }
    ]
  },
 
  "education": [
    {
      "institution": "Periyar University",
      "department": "BCA",
      "studyType": "fulltime",
      "batch start year": 2021,
      "batch end year": 2024,
      "gpa": 7.5,
    }
  ],
  "skills": [
    {
      "name": "java, HTML ",
      "level": "beginer",
      "project": [
        "EMPLOYEE MANAGEMENT SYSTEM WEB APPLICATION",
        "BLOOD BANK & DONOR MANAGEMENT SYSTEM "
      ]
    }
  ],
  "languages": [
    {
      "language": "Tamil,English",
    }
  ],
  "interests": [
    {
      "name": " coding",
    }
  ]
}
console.log(myResume);


var json = [{
  "id" : "sudharsan s", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : " task day 5 all for loops",
  "mail": "iamsudhan.sudharsan2002@gamil.com",
},
{
  "id" : "sudhan", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : "task day 5 all for loops",
  "mail": "sudhan@gmail.com"
},
{
 "id" : "mani", 
 " msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
 "task" : "task day 5 all for loops",
 "mail": "mani@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].id);
//console.log(json[key].msg);

}
}
//for Of
let text = "";
for (let x of json[key].id) {
text += x; 
}
console.log(text);