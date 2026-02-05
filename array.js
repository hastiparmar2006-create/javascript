// // Array -- Hold multiple values at sane time
// // [1,2,3,4,5] 
// // ["Heello","a","B","c"]
// // [2,"Bye", "Hello",50]

// // create
// // define a vaiable = [multiple values]
// let srr = [1,2,3,4,5];

// // Access
// // position = [0 1 2 3]
// // access
// // array_name[position]
// // arr[3], arr[2], arr[10]

// //modify
// // array_name[position] = new_value
// // arr[0] =10

// // Array Methods
// // push,pop, shift , splice,slice, reverse,sort
// // push --> enter new value into array -- place it into last
// arr.push(5);
// // variable || funcation.method --> koi variable ke funcation in pachhal dot(.) kari ne lakho to te method kevai
// // use case -- enter new product into existing producats list

// // pop --> remove last value into array
// arr.pop();
// // use case -- remove last product you add into your list

// // shift --> remove first value into array
// arr.shift(); 
// // use caes -- remove old product automatic after sometimes

// // unshift -- old value into array -- first
// arr.unshift(10);
// // use case -- add a value into top of that data you receive

// // splice - remove value into array -- specific position and specific number of values
// // into () - first index(position), how many value you want to remove
// let e = [50,60,30,40,10];
// e.splice(2,2); 
 

// // slice - copy values from array -- specific position and specific number of values
// // new variable = array_name.slice(start_position, end_position)
// // start_position -- include into copy
// // end_position -- not include into copy
// let f = [100,50,25,0];
// let new_f = f.slice(1,3);

// // use case -- copy specific data and save it into new variable

// // generate a report based on date and generate a  file or save the file into your local machine.

// // splice vs slice
// // splice -- remove value into main array or modify new array
// //slice -- copy value from main array and create a new array that hold the value that you can into

// // reverse -- reverse value of array
// let g  = [25,30,35,40,85];
// // g.reverse();
// // use case -- show latest update first into your fronted

// //sort -- set into ascending order
// let h = [50,20,80,10,60];
// h.sort();
// // let h = [11,62,3,4,25];
// // let sr = h.sort (funcation(a,b){
// //     return a-b; // ascending order
// // })

// // let h = [11,62,3,4,25];
// // let sr = h.sort (function(a,b){
// //     return b-a; // descending order
// // })

 

// // ================== ARRAY METHODS : ANSWER + WHY ==================

// // Q1. push()
// // Add a new task 'Buy milk'
// let tasks = ['Wake up', 'Brush teeth'];
// tasks.push('Buy milk');
// // ANS: ['Wake up', 'Brush teeth', 'Buy milk']
// // WHY: push() adds a new element at the END of the array


// // Q2. pop()
// // Remove the last notification
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();
// // ANS: ['Email', 'Message']
// // WHY: pop() removes the LAST element of the array


// // Q3. shift()
// // Remove the first customer
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift();
// // ANS: ['Customer2', 'Customer3']
// // WHY: shift() removes the FIRST element (queue operation)


// // Q4. unshift()
// // Add a new song at the beginning
// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A');
// // ANS: ['Song A', 'Song B', 'Song C']
// // WHY: unshift() adds element at the BEGINNING of the array


// // Q5. splice()
// // Remove 'Alex' and add 'John' and 'Sara'
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara');
// // ANS: ['Mike', 'John', 'Sara', 'Emma', 'Sophia']
// // WHY: splice() removes 1 element at index 1 and inserts new elements at same position


// // Q6. splice()
// // Remove 2 items starting from index 1
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1, 2);
// // ANS: ['Burger', 'Salad']
// // WHY: splice(startIndex, deleteCount) removes elements from original array


// // Q7. slice()
// // Get weekend days
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend = days.slice(5);
// // ANS: ['Saturday', 'Sunday']
// // WHY: slice() creates a NEW array and does NOT modify original array


// // Q8. reverse()
// // Reverse levels
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();
// // ANS: ['Hard', 'Medium', 'Easy']
// // WHY: reverse() reverses elements in the SAME array (mutates array)


// // Q9. sort()
// // Sort scores ascending
// let scores = [45, 12, 78, 34, 89];
// scores.sort((a, b) => a - b);
// // ANS: [12, 34, 45, 78, 89]
// // WHY: compare function is needed to sort numbers correctly


// // Q10. sort() with numbers
// // Sort prices low to high
// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);
// // ANS: [49, 149, 199, 299, 999]
// // WHY: default sort treats numbers as strings, so comparison is required


// // Q11. slice() vs splice()
// // First 3 items without changing original array
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3);
// // ANS: ['Laptop', 'Phone', 'Tablet']
// // WHY: slice() does NOT modify original array


// // Q12. splice() complex
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(2, 1, 'Purple', 'Orange');
// // ANS: ['Red', 'Green', 'Purple', 'Orange', 'Yellow']
// // WHY: splice() removes 'Blue' and inserts new elements at same index


// // Q13. reverse() + push()
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');
// // ANS: ['Step 3', 'Step 2', 'Step 1', 'Final Step']
// // WHY: reverse() changes order, push() adds element at end


// // Q14. sort() strings (ignore case)
// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// // ANS: ['alice', 'Bob', 'charlie', 'David']
// // WHY: toLowerCase() ensures case-insensitive sorting


// // Q15. Combination Question
// let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception');
// movies.shift();
// movies.sort();
// // ANS: ['Gladiator', 'Inception', 'Titanic']
// // WHY: push() adds, shift() removes first, sort() arranges alphabetically


// // Q16. splice() return value
// let nums1 = [1, 2, 3, 4];
// let removed = nums1.splice(1, 2);
// // ANS (removed): [2, 3]
// // ANS (nums1): [1, 4]
// // WHY: splice() returns an array of removed elements


// // Q17. slice() immutability check
// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3);
// // ANS (result): [20, 30]
// // ANS (nums2): [10, 20, 30, 40]
// // WHY: slice() is NON-MUTATING


// // Q19. reverse() mutation
// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse();
// // ANS: ['c', 'b', 'a']
// // WHY: reverse() mutates original array and both variables refer to same array


// // Q21. splice() edge case
// let arr = ['x', 'y', 'z'];
// arr.splice(1, 0, 'new');
// // ANS: ['x', 'new', 'y', 'z']
// // WHY: deleteCount = 0 means no deletion, only insertion


// // Q23. slice() negative index
// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1);
// // ANS: [300, 400]`
// // WHY: negative index counts from end of array


// // Q24. splice() vs slice()
// // a) Update original array → splice()
// // b) Keep original unchanged → slice()
// // WHY: splice() mutates array, slice() does not


// // Q25. Chained methods
// let arr2 = [1, 2, 3];
// arr2.push(arr2.shift());
// // ANS: [2, 3, 1]
// // WHY: shift() removes first element and push() adds it to end


// // use case -- sort product price low to high

// let arr1 = [10,2,5,20,30]
// // let sort_var = arr1.sort(function (a,b){
// //     return a-b;
// // })
// let sort_var = arr1.sort((a,b)=> a-b)// -- use when array give numbers of numeric values

// let arr22 =  ['b','f','z','q','m','k']


// // for each loop
// // for each --  Array ni darek value mate loop chalse
// let i = [10,35,40,68]

// i.forEach(val => {
//     let new_val = val + 10;
//     console.log(new_val)
// });


// // important into array
// // now all method are used in real world projects
// // all method are working

// // .map() Method:
// // map tyare j use karvanu ke jare ek new array create karvo chhe
// // first map create a black array -- only for understanding
// let data = [10,20,50,40,15]
// // same like a for each loop but map return a new array
// let temp_data = data.map( val => {
//     if(val > 20){
//         return val;
//     }
// });


// //EXAMPLE:
// // 1. Double daily steps count

// // Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }

// const newSteps = steps.map(doubleSteps);
// console.log(newSteps);  



// // 2. Convert minutes to seconds

// // Real life: Video duration calculation

// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// console.log(seconds);



// // 3. Add ₹50 delivery charge to prices

// // Real life: Food delivery app

// const pricess = [200, 350, 500];

// const finalPrices = pricess.map(price => price + 50);
// console.log(finalPrices);



// // 4. Convert exam marks to grades

// // Real life: Result system

// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }

// const grades = marks.map(getGrade);
// console.log(grades);



// // 5. Capitalize names

// // Real life: Display usernames properly

// const names = ['rahul', 'neha', 'amit'];

// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );
// console.log(formattedNames);



// // 6. Apply 10% discount

// // Real life: Shopping sale

// const prices = [500, 1000, 1500];

// function applyDiscount(price) {
//   return price - price * 0.10;
// }

// const discounted = prices.map(applyDiscount);
// console.log(discounted);



// // 7. Add bonus points to scores based on condition

// // Real life: Game scoring system

// const scores = [45, 60, 85];

// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });
// console.log(finalScores);


// // 8. Convert temperatures with formula

// // Real life: Weather app

// const celsius = [0, 20, 30];

// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }

// const fahrenheit = celsius.map(toFahrenheit);
// console.log(fahrenheit);


// // 9. Generate table of numbers

// // Real life: Math learning app

// const numbers = [1, 2, 3, 4];

// const tableOfTwo = numbers.map(num => num * 2);
// console.log(tableOfTwo);



// // 10. Combine map with string formatting

// // Real life: SMS notification system

// const balances = [500, 1200, 300];

// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );
// console.log(messages);


// // filter
// // filter tyare  use karvu ke jyare ek new array create karvo chhe with condition
// // in return true/false
// // if true --> add into new array
// // if else(false) --> not add into new array
// let Laptops_price = [15000,20000,30000,65000,99000,45000];

// let expensive_laptops = Laptops_price.filter((price) => {
//     if (price>3000) return true;
// });

// // je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare

// // use case -- data ma thi specific data new array ma store karvo hoy based on condition

// // ex. product ma thi spefific price na product new array ma store karva hoy
// // if you want to show only expensive product on your homepage
// //if you want to filter product based on price
// let product_type = ["mobile","tablet","laptop","mouse","keyboard"];
// let filter_product_type = product_type.filter((type) => {
//     if(type === "tablet" || type === "mobile") return true;
// });


// // reduce
// // reduce tyare j use karvu ke jyare ek single value calculate karvi hoy from array
// let total_price = [15,68,45,58,52,48];

// let final_price =  total_price.reduce((accumulator,val) => {
//     return accumulator + val;
// }, 0);   // intial value of accumulator
// // 0 + 10 => 10
// // 10 + 10 => 20
// // 20 + 10 => 30
// // 30 + 10 => 40
// //  accumlator --> je value funcation ma return thase te accumlator ma store thase --> accumlator  name change kari sako cho
// // val --> array ni darek value

// // use case -- data ma thi ek single value calulate karvi hloy
// //ex. product ma thi total price calculate karvi hoy


// // ### 1. Get even numbers
// // **Real life:** Find even roll numbers
// // ```js
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);


// // ### 2. Filter adults
// // **Real life:** Allow only 3+ users
// // ```js
// const ages = [2, 1, 10, 16, 5];
// function isAdult(age) {
//   return age >= 18;
// }
// const adults = ages.filter(isAdult);
// // ```

// // ---

// // ### 3. Remove empty items
// // **Real life:** Clean user input
// // ```js
// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');
// // ```
// // ---

// // ### 4. Filter passing marks
// // **Real life:** Exam result system
// // ```js
// const marks = [35, 72, 88, 40, 25];
// const passedStudents = marks.filter(mark => mark >= 40);
// // ```
// // ---

// // ### 5. Get affordable prices
// // **Real life:** Shopping app price filter
// // ```js
// const prices = [199, 499, 999, 1499, 299];
// const affordable = prices.filter(price => price <= 500);
// // ```
// // ---

// // ### 6. Filter long words
// // **Real life:** Search keyword validation
// // ```js
// const words = ['hi', 'hello', 'javascript', 'ok'];
// function isLongWord(word) {
//   return word.length > 3;
// }
// const longWords = words.filter(isLongWord);
// // ```

// // ### 7. Filter positive numbers
// // **Real life:** Bank transaction validation
// // ```js
// const transactions = [200, -100, 500, -50, 300];
// const credits = transactions.filter(amount => amount > 0);
// // ```

// // ---

// // ### 8. Filter numbers within a range
// // **Real life:** Score selection
// // ```js
// const scores = [45, 60, 85, 30, 90];
// const selectedScores = scores.filter(score => score >= 50 && score <= 90);


// JavaScript .reduce() Method Example:


// ### 1. Total money in wallet
// **Real life:** Add all cash amounts
// ```js
// 

// JavaScript .Map, .Filter() and .reduce() Method Examples:
//1.
// const prices1 = [200, 800, 1200, 450, 700];

// const total = prices1
//   .filter(price => price > 500)
//   .map(price => price * 0.9)
//   .reduce((sum, price) => sum + price, 0);

// console.log(total); // ans: 2430

// //2.
// const minutes = [20, 45, 60, 15, 90];

// const totalCalories = minutes
//   .filter(min => min > 30)
//   .map(min => min * 5)
//   .reduce((total, cal) => total + cal, 0);

// console.log(totalCalories); // ans: 975

// //3.
// const marks = [35, 72, 88, 40, 25, 90];

// const passed = marks.filter(mark => mark >= 40);

// const average =
//   passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

// console.log(average); // ans: 72.5

// //4.
// const wages = [300, 800, 450, 1000, 600];

// const totalPayout = wages
//   .filter(wage => wage > 500)
//   .map(wage => wage + 100)
//   .reduce((total, wage) => total + wage, 0);

// console.log(totalPayout); // ans:2700


// //5.
// const progress = [20, 50, 75, 40, 100];

// const totalPoints1 = progress
//   .filter(p => p >= 50)
//   .map(p => p * 2)
//   .reduce((sum, p) => sum + p, 0);

// console.log(totalPoints1); // ans:450


// //6.
// const transactions = [1000, -500, 2000, -300, 1500];

// const creditedAmount = transactions
//   .filter(amount => amount > 0)
//   .map(amount => amount * 1.02)
//   .reduce((total, amount) => total + amount, 0);

// console.log(creditedAmount); // ans:4590


// //7.
// const scores = [30, 60, 90, 45, 80];

// const finalScore = scores
//   .filter(score => score > 50)
//   .map(score => score + 10)
//   .reduce((sum, score) => sum + score, 0);

// console.log(finalScore); // ans: 260


// //8.
// const prices2 = [500, 1200, 3000, 800, 1500];

// const finalAmount = prices2
//   .filter(price => price > 1000)
//   .map(price => price * 1.18)
//   .reduce((sum, price) => sum + price, 0);

// console.log(finalAmount); // ans: 6726


// //9.
// const hours = [6, 8, 9, 7, 10];

// const totalPoints2 = hours
//   .filter(hour => hour >= 8)
//   .map(hour => hour * 10)
//   .reduce((sum, point) => sum + point, 0);

// console.log(totalPoints2); // ans: 270


// //10.
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumOfSquares = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num * num)
//   .reduce((sum, num) => sum + num, 0);

// console.log(sumOfSquares); //  ans:56

// JavaScript Question for .Map(), .filter() and .reduce()

// ================= Q1 =================
// Grocery Store – Total Cost
const prices1 = [50, 120, 300, 80, 200];
const totalCost = prices1
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);
console.log("Q1 Answer:", totalCost); // ans: 651


// ================= Q2 =================
// Fitness App – Weekly Calories
const minutes = [10, 25, 40, 15, 60];
const totalCalories = minutes
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);
console.log("Q2 Answer:", totalCalories); // ans:500


// ================= Q3 =================
// Exam Results – Total Passed Marks
const marks = [35, 55, 80, 20, 45];
const totalPassedMarks = marks
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);
console.log("Q3 Answer:", totalPassedMarks); // ans:180


// ================= Q4 =================
// Bank App – Total Credits
const transactions = [500, -200, 1000, -300, 700];
const totalCredits = transactions
  .filter(t => t > 0)
  .reduce((s, t) => s + t, 0);
console.log("Q4 Answer:", totalCredits); // ans:2200


// ================= Q5 =================
// Online Sale – Discounted Bill
const prices2 = [800, 1500, 3000, 600, 1200];
const totalBill = prices2
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);
console.log("Q5 Answer:", totalBill); // ans:4845


// ================= Q6 =================
// Attendance – Reward Points
const hours1 = [5, 7, 8, 6, 9];
const rewardPoints = hours1
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);
console.log("Q6 Answer:", rewardPoints); // ans:240


// ================= Q7 =================
// Delivery App – Total Distance
const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);
console.log("Q7 Answer:", totalDistance); // ans:27


// ================= Q8 =================
// Salary System – Final Salary
const salaries = [18000, 25000, 30000, 15000];
const totalSalary = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((s, n) => s + n, 0);
console.log("Q8 Answer:", totalSalary); // ans:59000


// ================= Q9 =================
// Study App – Total Study Time
const hours2 = [0.5, 1.5, 2, 0.75, 3];
const totalMinutes = hours2
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
console.log("Q9 Answer:", totalMinutes); // ans:390


// ================= Q10 =================
// Electricity Usage – Monthly Bill
const units = [80, 120, 200, 90, 150];
const electricityBill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, u) => s + u, 0);
console.log("Q10 Answer:", electricityBill); // ans:2820


// ================= Q11 =================
// Game Scores – Final Power Score
const scores1 = [30, 50, 90, 20, 70];
const powerScore = scores1
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((s, n) => s + n, 0);
console.log("Q11 Answer:", powerScore); // ans:420


// ================= Q12 =================
// Travel App – Total Fare
const rides = [5, 12, 20, 8, 15];
const totalFare = rides
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((s, r) => s + r, 0);
console.log("Q12 Answer:", totalFare); // ans:197


// ================= Q13 =================
// Office Work – Productive Hours
const hours3 = [4, 6, 8, 5, 9];
const productiveMinutes = hours3
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
console.log("Q13 Answer:", productiveMinutes); // ans:1380


// ================= Q14 =================
// Shopping Cart – Reward Coins
const purchases = [300, 800, 1200, 400];
const totalCoins = purchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((s, c) => s + c, 0);
console.log("Q14 Answer:", totalCoins); // ans:20


// ================= Q15 =================
// Fuel App – Total Fuel Cost
const liters = [3, 6, 10, 4, 8];
const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((s, c) => s + c, 0);
console.log("Q15 Answer:", fuelCost); // ans:2520


// ================= Q16 =================
// Interview Classic – Sum of Cubes
const numbers1 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers1
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((s, n) => s + n, 0);
console.log("Q16 Answer:", sumOfCubes); // ans:153


// ================= Q17 =================
// Performance Tracking – Bonus Points
const scores2 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;
const totalScore = scores2
  .filter(s => s > avg)
  .map(s => s + 5)
  .reduce((s, n) => s + n, 0);
console.log("Q17 Answer:", totalScore); // ans:95


// ================= Q18 =================
// Subscription App – Final Bill
const plans = [199, 399, 599, 299];
const finalBill = plans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((s, p) => s + p, 0);
console.log("Q18 Answer:", finalBill); // ans:1178.82


// ================= Q19 =================
// Learning App – Achievement Score
const scores3 = [45, 60, 70, 30, 80];
const achievementScore = scores3
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((s, n) => s + n, 0);
console.log("Q19 Answer:", achievementScore); // ans:14900


// ================= Q20 =================
// Interview Finisher 
const numbers2 = [3, 6, 9, 10, 12];
const finalSum = numbers2
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((s, n) => s + n, 0);
console.log("Q20 Answer:", finalSum); // ans:300


// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns whst you return inside it 
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

// let product = ["Laptop","Mobile","Tablet","Desktop","Smart Watch"];
// let find_product = product.find((item)=>{
//   // console.log("can't find product"); // not working why??
//   if (item==="Mobile") {
//     return true;
//   } else if (item === "Tablet"){
//     return true;
//   } else {
//     return false;
//   }
// });

// // use case -- data mathi ek value find karvi hoy based on condition
// // ex. product ma thi specifice product find karvo

// // find vs filter
// // Real-life scenario: Shopping mall security
// // your are a security guard at a shopping mall
// // check the list of visitors
// let people = ["John","sara","Mike","Anna","David","Sara"];
// // find --> you are looking for the first person named "sara" in the list and stop searching (pehli var j male bas e j and angal check j na kare)
// //let person = people.find ((name) => === "sara");
// console.log(person);

// // filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
// let AllSara = people.filter((name) => name === "Sara");
// console.log(AllSara);

// // example 2: Book bus for travel

// //  Some 
// // check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi
// // condition true aave tyare stop kare
// // some() vs find () return value of array
// // give ans in true and false
// let marks1 = [10,20,35,90];
// let any = marks1.someK((val)=> {
//   if (val > 85) return true;
//   // if (val < 85) retur "need improvement";
// });
// console.log(any)
// // use case -- check if some product are out of stock in your cart


// // every
// // check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// // true -- baha items condition match kare
// // false  -- ek pan fail thay to
// let def =[20,30,90,45];
// let num = def.every(function(val){
//   return val <40;
// })
// // use case --> check all student in pass or not

// // some(), find(), filter(), every()
// // let products== ["Tablet", "Mobile","Laptop","Mobile"]
// // Method --> condition --> output
// // .some() --> item === "Mobile" --> true
// //.find() --> item === "Mobile" --> "Mobile"
// // filter() --> item === "Mobile" --> ["Mobile","Mobile"]
// // every() --> item === "Mobile" --> false


// Destructuring operator -- give value to variable (ex. we don't use every time arr1[1],just save into variable let [ , k]=arr1)
let arr4 = [1,2,3,4,5]
// let j = arr4 [0];
// let k= arr[2];
let [ j, , k] = arr4; // --> destructuring
// let [j, ,k]= arr;
console.log(k);
let user_data = ["test","test@gmail.com","Male","surat"]
let [name,email,gender,city] = user_data
console.log("1.name:",name)
console.log("2.email:",email)
console.log("3.gender:",gender)
console.log("4. city:", city)


// spread oprator -- copy value from main array
let arr8 = [1,2,3,4,5,6,7]
// let arr4 = arr3 ; // - just give reference not copy value(when ypu change into arr4 that will be changes arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and object
let temp_arr = [1,2,3];
let temp_arr2 = [4,5,6];
let mix_arr = [...temp_arr,...temp_arr2];