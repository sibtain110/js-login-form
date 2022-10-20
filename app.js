let email = document.getElementById("email")
let pass = document.getElementById("pass")
let botton = document.getElementById("btn")

let x = document.getElementById("email")
let y = document.getElementById("pass")


botton.addEventListener("click",(e)=>{
    e.preventDefault(   )
    console.log("email :" ,x.value + " " + "pass",y.value)
})





//====================--------- Asynchronous javascript

console.log("This is Async");

setTimeout(() => {
    for (let index = 0; index < 1200; index++) {
        const element = index;
        console.log("this is index number" , index);
    }
}, 100);

console.log("complete counting");