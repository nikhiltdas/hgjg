var person={Name:"Nikhil",Age:22,Job:"Teacher",
display: function (){

//      var Name="Sanju"
   console.log(Name)
}}

   for(x in person){
    console.log(person[x])
   }
person.dob="11-05-2001"

console.log(person)
person.displayAge=function(){
    console.log(this.Age)
}
console.log(person.displayAge())