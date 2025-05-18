const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote: "Strive not to be a success, but rather to be of value",
    author: "Albert Einstein",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);
