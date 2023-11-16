//console.log('running script...');

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


//add up to 50
const isSum50 = n1 + n2 + n3 + n4 === 50;
console.log(isSum50);

// at least two odd numbers

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);

//no number larger than 25

const isOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isOver25);


//all unique numbers

const isUnique = n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;
console.log(isUnique);

//all numbers divisible by 5

const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(isDivisibleBy5);


//first number larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast);

const result1 = n2 - n1;
const result2 = result1 * n3;
const result3 = result2 % n4;
console.log(result3);

//overall result.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique && isDivisibleBy5 && isFirstLargerThanLast;
console.log(isValid);

console.log("=======================Practical Math=====================================");
const totalDistance = 1500;//mi 
const fuelEfficiency55 = 30;// mi per gal
const fuelEfficiency60 = 28;// mi per gal
const fuelEfficiency75 = 23;// mi per gal
const fuelBudget = 175;//$
const costPerGallon = 3;// $ per gal

// Function to calculate fuel needed
const calculateFuel = (speed, efficiency) => totalDistance / efficiency;

// Function to calculate trip time
const calculateTripTime = (speed) => totalDistance / speed;

// Calculate fuel needed for each speed
const fuelNeeded55 = calculateFuel(55, fuelEfficiency55);
const fuelNeeded60 = calculateFuel(60, fuelEfficiency60);
const fuelNeeded75 = calculateFuel(75, fuelEfficiency75);

console.log(`Fuel needed for 55 mph: ${fuelNeeded55} gallons`);
console.log(`Fuel needed for 60 mph: ${fuelNeeded60} gallons`);
console.log(`Fuel needed for 75 mph: ${fuelNeeded75} gallons`);

// Check if the budget is enough for each speed
const isBudgetEnough55 = fuelNeeded55 * costPerGallon <= fuelBudget;
const isBudgetEnough60 = fuelNeeded60 * costPerGallon <= fuelBudget;
const isBudgetEnough75 = fuelNeeded75 * costPerGallon <= fuelBudget;

console.log(`Is the budget enough for 55 mph? ${isBudgetEnough55}`);
console.log(`Is the budget enough for 60 mph? ${isBudgetEnough60}`);
console.log(`Is the budget enough for 75 mph? ${isBudgetEnough75}`);

// Calculate trip time for each speed
const time55 = calculateTripTime(55);
const time60 = calculateTripTime(60);
const time75 = calculateTripTime(75);

console.log(`Trip time for 55 mph: ${time55} hours`);
console.log(`Trip time for 60 mph: ${time60} hours`);
console.log(`Trip time for 75 mph: ${time75} hours`);

// Compare results and make a recommendation
if (isBudgetEnough55 && isBudgetEnough60 && isBudgetEnough75) {
  console.log("You have enough budget for all speeds!");
} else {
  console.log("Adjust speed to meet budget!");
}

