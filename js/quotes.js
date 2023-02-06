const quotes = [
    {
        quote: "I don't want to be alone, I want to be left alone.",
        author :"Audrey Hepburn",
    },
    {
        quote: "I never thought I'd land in pictures with a face like mine.",
        author :"Audrey Hepburn",
    },
    {
        quote: "I was born with an enormous need for affection, and a terrible need to give it.",
        author :"Audrey Hepburn",
    },
    {
        quote: "People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
        author :"Audrey Hepburn",
    },
    {
        quote: "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
        author :"Audrey Hepburn",
    },
    {
        quote:"Success is like reaching an important birthday and finding you're exactly the same.",
        author :"Audrey Hepburn",
    },
    {
        quote:"I probably hold the distinction of being one movie star who, by all laws of logic, should never have made it. At each stage of my career, I lacked the experience.",
        author :"Audrey Hepburn",
    },
    {
        quote: "I love people who make me laugh. I honestly think it's the thing I like most, to laugh. It cures a multitude of ills. It's probably the most important thing in a person.",
        author :"Audrey Hepburn",
    },
    {
        quote: "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
        author :"Audrey Hepburn",
    },
    {
        quote: "You go back. You search for what made you happy when you were smaller. We are all grown up children, really... So one should go back and search for what was loved and found to be real.",
        author :"Audrey Hepburn",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;