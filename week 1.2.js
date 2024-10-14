console.log("hello");

OBJECTS
const allUsers = [
    {
        firstname: "anmol",
        age: 20
    },
    {
        firstname: "ayush",
        age: 20,
        metadata: {
            gender: "male"
        }
    }
];

for (let i = 0; i < allUsers.length; i++) {
    console.log(allUsers[i].firstname);
    if (allUsers[i].metadata) {
        console.log(allUsers[i].metadata.gender);
    }
}

function sum(a,b){
    return a+b;
}

const val=sum(3,4);
console.log(val);

Callback functions
function sum(a,b,fnToCall){
    let ans=a+b;
    fnToCall(ans);
}
function result(ans){
    console.log("sum is: ",ans);
}

sum(2,3,result);


                                                                    //**ASSIGNMENTS**//

// 1.Create a counter in Javascript (counts down from 30 to 0).
let timeLeft = 30;
let countdownTimer = setInterval(function() {
    process.stdout.write(`\r${timeLeft}   `); // Update the terminal line
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        console.log("\nTime's up!");
    }
}, 1000);

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running.
let startTime = Date.now();
setTimeout(function() {
    let endTime = Date.now();
    let delay = endTime - startTime;
    
    console.log(`The setTimeout callback was executed after ${delay} milliseconds.`);
}, 1000);

let h = 0;
let m = 0;
let s = 0;

// 3. Create a terminal clock (HH:MM:SS).
function formatTime(unit) {
    return unit.toString().padStart(2, '0');
}

function clock() {
    setInterval(function() {
        s++;
        if (s >= 60) {
            s = 0;
            m++;
            if (m >= 60) {
                m = 0;
                h++;
                if (h >= 24) {
                    h = 0;
                }
            }
        }
        process.stdout.write(`\r${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`);
    }, 1000); 
}

clock();



