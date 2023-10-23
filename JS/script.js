// Random Gradesheet
let number = 30

if (number >=80 && number <=100) {
    console.log("A+");
}
else if(number >=70 && number <=79) {
    console.log("A");
}
else if(number >=60 && number <=69) {
    console.log("A-");
}
else if(number >=50 && number <=59) {
    console.log("B");
}
else if(number >=40 && number <=49) {
    console.log("C");
}
else if(number >=33 && number <=39) {
    console.log("D");
}
else {
    console.log("F");
}
// Random Gradesheet

//Array with variables
let fruits = ['mango', 'jackfruit', 'apple', 'watermelon']
console.log( fruits)

let members = [
    {
        name: 'Kamal',
        age: 18,
        hometown: 'Rangpur',
    },

    {
        name: 'Rakib',
        age: 20,
        hometown: 'Comilla',
    },
]
console.log(members)

//Array with variables


// Function
function abc(){
    let x = 10
    let y = 20
    console.log(x+y)
    console.log(y-x)
    console.log(x*y)
    console.log(x/y)
}
abc()

let company = ["Pran", "RFL", "Jamuna", "Basundhara", "YKK", "BAT"]

company.forEach(function(comp){ 
    console.log(comp)
})
// Function

let text = document.querySelector('h1')
let button = document.querySelector('button')
button.addEventListener('click', function(){
    text.style.color="blue"
    text.style.background="red"
    text.style.fontSize="50px"
})

 console.log(text.innerHTML)