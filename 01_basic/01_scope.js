// Globle scope: To decleare a variable outside the funciton or block of the curly barces and accessed the variable anywhere in the program or code 
var name = "Mustifa khan";
function greeting(){
    console.log(name);
}
greeting();

// funciton scope: To decleare a variable inside the funciton so the variable will asscessd only inside that funciton
function showAge(){
    let age = 26;
    console.log(age);
    
}
showAge();
//console.log(age); it will show error like not defined

// block socpe: To decleare a variable inside the curly baraces{} (like if and for or any block) so only access in that block

if(true){
 let city="Timergara";
 console.log(city)// accessible here;
 
}
//console.log(city); Not accessible here show error like not defined

