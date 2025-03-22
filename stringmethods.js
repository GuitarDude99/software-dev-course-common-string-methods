// ----------------------
// Practice Problem #1
// ----------------------

console.log("\n===== Practice Problem #1 =====");

// Activity 1: Searching Strings
let searchString = "Learning JavaScript is fun!";
let hasJavaScript = searchString.includes("JavaScript"); // Check for "JavaScript"
let funPosition = searchString.indexOf("fun"); // Find position of "fun"

console.log("\n--- Searching Strings ---");
console.log("Has JavaScript:", hasJavaScript);
console.log("Position of 'fun':", funPosition);

// Activity 2: Transforming Strings
let bootcampString = " CODE BOOTCAMP ";
let transformedString = bootcampString.trim().toLowerCase(); // Trim & lowercase
let replacedBootcamp = transformedString.replace("bootcamp", "JavaScript"); // Replace "BOOTCAMP" with "JavaScript"

console.log("\n--- Transforming Strings ---");
console.log("Transformed String:", transformedString);
console.log("Replaced 'BOOTCAMP' with 'JavaScript':", replacedBootcamp);

// Activity 3: Breaking Apart a Sentence
let sentence = "Coding is fun and educational";
let wordsArray = sentence.split(" "); // Split sentence into words

console.log("\n--- Breaking Apart a Sentence ---");
console.log("Words Array:", wordsArray);

// Activity 4: Retrieving Substrings
let bootcampWord = "Bootcamp";
let firstCharacter = bootcampWord.charAt(0); // Get first character
let extractedCamp = bootcampWord.slice(-4); // Extract "camp"

console.log("\n--- Retrieving Substrings ---");
console.log("First character:", firstCharacter);
console.log("Extracted 'camp':", extractedCamp);

// ----------------------
// Advanced Challenge
// ----------------------

console.log("\n===== Advanced Challenge =====");

let orderDetails = `
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
`;

// Extract the customer name
let customerName = orderDetails.split("\n")[0].replace("Customer: ", "").trim();

// Split the order into an array of items
let orderItems = orderDetails.split("\n")[1].replace("Order: ", "").split(", ").map(item => item.trim());

// Convert the total price to uppercase
let totalPrice = orderDetails.split("\n")[2].toUpperCase();

console.log("\n--- Processing Customer Order ---");
console.log("Customer Name:", customerName);
console.log("Order Items:", orderItems);
console.log("Total Price:", totalPrice);

// ----------------------
// Practice Problem #2
// ----------------------

console.log("\n===== Practice Problem #2 =====");

let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript2 = inputString.includes("JavaScript"); // Check for "JavaScript"
let codingPosition = inputString.indexOf("Coding"); // Find "Coding"
let startsWithWelcome = inputString.trim().startsWith("Welcome"); // Check start
let endsWithToday = inputString.trim().endsWith("today."); // Check end

console.log("\n--- Searching ---");
console.log("Has JavaScript:", hasJavaScript2);
console.log("Coding position:", codingPosition);
console.log("Starts with 'Welcome':", startsWithWelcome);
console.log("Ends with 'today.':", endsWithToday);

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // Convert to lowercase
let uppercaseString = inputString.toUpperCase(); // Convert to uppercase
let trimmedString = inputString.trim(); // Trim whitespace
let replacedString = inputString.replace("JavaScript", "coding"); // Replace word

console.log("\n--- Transforming ---");
console.log("Lowercase:", lowercaseString);
console.log("Uppercase:", uppercaseString);
console.log("Trimmed:", trimmedString);
console.log("Replaced:", replacedString);

// 3. Breaking Apart
let wordsArray2 = inputString.trim().split(" "); // Split into words

console.log("\n--- Breaking Apart ---");
console.log("Words Array:", wordsArray2);

// 4. Retrieving
let firstCharacter2 = trimmedString.charAt(0); // Get first character
let extractedBootcamp = inputString.slice(inputString.indexOf("Bootcamp"), inputString.indexOf("Bootcamp") + "Bootcamp".length); // Extract "Bootcamp"

console.log("\n--- Retrieving Substrings ---");
console.log("First character:", firstCharacter2);
console.log("Extracted Bootcamp:", extractedBootcamp);

// Final Summary Output
console.log("\n===== Summary Output =====");
console.log({
  hasJavaScript2,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray2,
  firstCharacter2,
  extractedBootcamp
});
