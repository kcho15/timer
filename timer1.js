// Timer that will beep after a specified amount of time has passed
// User may specify any number of alarms using command line arguments 

// Declare variable for command line, slice the array and take the new first element as a number using [0] 
const timesToBeep = process.argv.slice(2) //Array of our times to beep
// const startTime = Date.now(); // Get start time for testing!

// Edgecases: No numbers are provided, not a number inputed, or number is negative 
for (let alarmTime of timesToBeep) {
  
  if (!isNaN(Number(alarmTime)) && (alarmTime > 0)) {
    setTimeout(() => {
    process.stdout.write('\x07'); // System sound 
    // const runTime = Date.now() - startTime; // Calculate run time
    // console.log(`Run time: ${runTime}ms`); // 
    }, alarmTime * 1000)
  }
}; 

// Tests
// const startTime = Date.now(); // line 6 - Gets the current time and will 
// const runTime = Date.now() - startTime; // line 14 - Calculate run time
// console.log(`Run time: ${runTime}ms`); // line 15 - Show run time for testing! 