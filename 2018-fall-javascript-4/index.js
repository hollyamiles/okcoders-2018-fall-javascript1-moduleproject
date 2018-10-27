var user1 ={
    firstname: 'Holly',
    lastname: 'Miles',
    age: 35
}
console.log(user1.age);

var user2= {
    firstname: "August",
    lastname: "Miles",
    age: 2
}
var weddinglist = [
    'old'
    'new'
    'borrowed'
    'blue'

]
 console.log (weddinglist [2]);

 var addressbook = [
     {
     firstname: "Andy",
     lastname: "Reinders",
     age: 37
     address: 1500 Coachlight Ct, WDM, IA 50365
 }

 {
     firstname: "Kay",
     lastname: "Domek",
     age: 83
     address: 600 Wallace St, Emmetsburg, IA 50536
 }

 {
     firstname: "Channa",
     lastname: "Newell",
     age: "37",
     address: "5190 NE 51st Ave, Portland, OR 97213"

 }
 {
     firstname: "Stephanie",
     lastname: "Spence",
     age: "41",
     address: "2134 NE 94th Ct, Vancouver, WA 98234",

 }
] ;
function printFirstnames (add){
    for(var i=0;i<add.length; i++){
        console.log(add[i].firstname)
    }
}
 printFirstnames(addressbook);

