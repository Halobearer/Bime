const quotes = [
    {
        quote: "Don't be fooled by the calendar. There are only as many days in the year as you make use of.",
        author: "Charles Richards"
    },
    {
        quote: "Time management is the mantra of my life.",
        author: "Vir Das"
    },
    {
        quote: "Time is what we want most, but what we use worst.",
        author: "William Penn"
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler"
    },
    {
        quote: "Ordinary people think merely of spending time, great people think of using it.",
        author: "Arthur Schopenhauer"
    }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const quoteText = document.querySelector(".quote-text");
    const quoteAuthor = document.querySelector(".quote-author");

    const randomQuote = getRandomQuote();
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuote(); // Display the first quote immediately
    setInterval(displayQuote, 3000); // Change the quote every 3 seconds
});
