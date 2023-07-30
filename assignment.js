/* 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.*/
let reverseString = (str)=>{
    return str.split("").reverse().join("");
}
const strInput = "hello World";
setTimeout(()=>{
    console.log(reverseString(strInput))
},2000)
/*
2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/
function timeRemain() {
  let count = 0;
  return setInterval(() => {
    if (count < 3) {
      console.log(`${(count += 1)} sec remain for new random number.`);
    } else {
      let randomNumber = Math.random();
      console.log("Random Number : ", randomNumber);
      count = 0;
    }
  }, 1000);
}
timeRemain()

/*
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

let itemsPriceInUs = [{price: 50, name: 'apple'},{price: 40, name: 'mango'},{price: 25, name: 'orange'},{price: 80, name: 'almond'}]
console.log("Items Price In US : ", itemsPriceInUs);

const itemsPriceInRs = itemsPriceInUs.map((ele, idx) => {
 ele["price"] = ele["price"] * 80;
 return ele
});
console.log("Item Price In India : ", itemsPriceInRs);

/* 
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/
const books = [
  {
    "book name": "Harry Potter",
    "author name": "jk Rowlings",
    "publish date": 2012,
  },
  { "book name": "Shambhala", "author name": "leo", "publish date": 2013 },
  { "book name": "Mogle", "publish date": 2009, "author name": "amesh" },
  { "book name": "Dogle", "publish date": 2010, "author name": "esh" },
  { "book name": "Logle", "publish date": 2019, "author name": "hsee" },
];

let booksAfter2009 = books.filter((ele) => {
  return ele["publish date"] > 2009;
});
booksAfter2009.forEach((ele) => {
  ele["author name"] = `${ele["author name"][0].toUpperCase()}${ele[
    "author name"
  ].slice(1, ele["author name"].length)}`;
});
console.log(booksAfter2009);

// const filteredBooks = books
//   .filter((el) => el["publish date"] > 2009)
//   .map((el) => ({
//     ...el,
//     "author name": `${el["author name"][0].toUpperCase()}${el[
//       "author name"
//     ].slice(1, el["author name"].length)}`,
//   }));

  /*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
  */

const url = "https://drive.google.com/file/d/1Xoy9EwDYKSC5QQZ541xAaNkzbNkeREE1/view"
const regex1 = 
/^((http|https):\/\/)?(www[0-9]\.)?(([A-Za-z0-9_-])+\.{1})+([A-Za-z]{2,4}|\<[^<>]+\>)(\/([A-Za-z0-9_-])+)*(\/)?$/mg
if(url.match(regex1,url)){
  console.log("Valid URL")
}
else{
  console.log("Invalid URL")
}

/* 
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
*/

function isValidLinkedInURL(input) {
  const linkedInURLPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|company)\/[a-zA-Z0-9_-]+\/?$/;

  if (linkedInURLPattern.test(input)) {
    console.log("Valid LinkedIn URL");
  } else {
    console.log("Invalid LinkedIn URL");
  }
}

// Test cases
isValidLinkedInURL("https://www.linkedin.com/in/johndoe/");             
isValidLinkedInURL("http://www.linkedin.com/pub/jane-doe/1a/2b/3c");    
isValidLinkedInURL("https://www.linkedin.com/company/example_corp/");   
isValidLinkedInURL("https://www.linkedin.com/johndoe/");                
isValidLinkedInURL("https://www.linkedin.com/in/12345/");               
