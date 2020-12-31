/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [ 
  {
    source: "Groucho Marx", 
    quote: "I refuse to join any club that would have me as a member.",
    citation: '',
    year: ''
  },
  { 
    source: "Will Ferrell",
    quote: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.",
    citation: '',
    year: '' 
  },
  { 
    source: "Jerry Seinfeld",
    quote: "Breaking up is like knocking over a Coke machine. You can't do it in one push; you got to rock it back and forth a few times, and then it goes over.",
    citation: '',
    year: '' 
  },
  { 
    source: "Jimmy Kimmel", 
    quote: "I never feel more alone than when I'm trying to put sunscreen on my back.",
    citation: '',
    year: ''
  },
  { 
    source: "Penny",
    quote: "My secret is so big that just the tip will be enough", 
    citation: "TV Show: Happy Endings", 
    year: "May 03, 2013"
  } //additional citation property with source and date
]
//console.log(quotes)

/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes) {
  let randomNumber = Math.floor( Math.random() * quotes.length ); //finding a random number using the length of the quotes
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}



/***
 * `printQuote` function
***/
//create a function named printQuote  
function printQuote() {
  let storedQuote = getRandomQuote(quotes); // a variable to store a random quote object 
  let html = ''; 
  html += `
   <p class="quote"> ${storedQuote.quote} </p>
   <p class="source"> ${storedQuote.source}` 
    
   if (storedQuote.citation !== '') {
    html += `<span> ${storedQuote.citation} </span>`; 
   } 
   if (storedQuote.year !== '') {
    html += `<span> ${storedQuote.year} </span>`
   }
   
   html += `</p>`
    ;

  document.getElementById('quote-box').innerHTML = html; 
};  



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);