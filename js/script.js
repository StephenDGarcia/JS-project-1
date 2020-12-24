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
  { author: "Groucho Marx", quote: "I refuse to join any club that would have me as a member." },
  { author: "Will Ferrell", quote: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are." },
  { author: "Jerry Seinfeld", quote: "Breaking up is like knocking over a Coke machine. You can't do it in one push; you got to rock it back and forth a few times, and then it goes over." },
  { author: "Jimmy Kimmel", quote: "I never feel more alone than when I'm trying to put sunscreen on my back."},
  { author: "Penny", quote: "My secret is so big that just the tip will be enough", show: "Happy Endings", date: "May 03, 2013"}
]
console.log(quotes)

/***
 * `getRandomQuote` function
***/
const getRandomQuote = function(quotes) {
  let randomNumber = Math.floor( Math.random() * quotes.length );
  let randomQuote = randomNumber[quotes];
  console.log(getRandomQuote);
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);