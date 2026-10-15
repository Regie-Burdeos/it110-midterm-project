const visualss = [ 
    {
        quote: "Life is long",
        author: "Ms. T"
    },
    {
        quote: "ikaw ang bugtong itik nga nag kapa kapa sa akong dughan",
        author: "Nina Dane"
    },
    {
        quote: "Life is like a box of chocolates, you never know what you're gonna get.",
        author: "Regie Burdeos"
    },
    {
        quote: "To live is to become a Visual",
        author: "Maerry Mae"
    },
    {
        quote: "It's okay when you get lost because it could be the way to find yourself.",
        author: "Maer"
    },
    {
        quote: "If you have feet, you should keep walking.",
        author: "Maer"
    },
    {
        quote: "Meron din naman palang ganda ang buhay, pwede na mangarap!",
        author: "Ms. T"
    },
    {
        quote: "Let the pain teach you how to dougie",
        author: "Nina Dane"
    },
     {
        quote: "And, when you want something, all the universe conspires in helping you to achieve it",
        author: "Paulo Coelho, the Alchemist"
    },
     {
        quote: "kaya pasensya na~~",
        author: "Maer"
    },
     {
        quote: "And sometimes, against all odds, against all logic, we hope",
        author: "Anonymous"
    },
     {
        quote: "You cannot ask the earth to bloom while wishing away the rain",
        author: "Regie Burdeos"
    },
     {
        quote: "Perhaps tears were never a sign of weakness, but a reminder that even strongest hearts are still human",
        author: "Regie Burdeos"
    },
     {
        quote: "Not everything you lose was meant to stay, and not everything you miss was your only chance",
        author: "Regie Burdeos"
    },
     {
        quote: "I hope the world gives you back some of the kindness you have given to others.",
        author: "Regie Burdeos"
    },
     {
        quote: "Somewhere between who you were and who you're becoming with, I hope you learn to be kind to yourself.",
        author: "Regie Burdeos"
    },
     {
        quote: "Time is Silver",
        author: "Ms. T"
    },
     {
        quote: "May you find little reasons to smile on days when you have every reason not to.",
        author: "Regie Burdeos"
    },
     {
        quote: "Sabi sa sarili ko wala lang to~~",
        author: "Ms. T"
    },
     {
        quote: "Saging lang ang may banana",
        author: "Ms. T"
    },
     {
        quote: "Akala mo lang meron, pero wala, wala, wala!",
        author: "Ms. T"
    },
     {
        quote: "May the days ahead be gentle with parts of you that are still learning how to heal.",
        author: "Regie Burdeos"
    },
     {
        quote: "You deserve to experience the same warmth you so effortlessly give to others.",
        author: "Regie Burdeos"
    },
     {
        quote: "May you always find your way back to the things that make your heart feel at home.",
        author: "Regie Burdeos"
    },
    {
        quote: "There are so many things we take for granted, but not our health.",
        author: "Maerry Mae"
    }
];


const page = document.querySelector(".quote-pagess");

async function quote(){
    const quotetext = document.getElementById("quotetext");
    const authors = document.getElementById("authors");

    try{


        const response = await fetch("https://dummyjson.com/quotes");

        if(!response.ok){
            throw new Error("Failed to fetch quote or no internet access");
        }

        const data = await response.json();

        const allQuotes = data.quotes.concat(visualss);

        const randomIndex = Math.floor(Math.random() * allQuotes.length);

        quotetext.innerHTML = "“" + allQuotes[randomIndex].quote + "”";
        authors.innerHTML = "— " + allQuotes[randomIndex].author;

    }catch(error){
        window.alert("Error: " + error.message);

    }


}

const newQuotes = document.getElementById("new-quotes");


newQuotes.addEventListener("click", quote);

const day = document.getElementById("changeimage");
const nightBtn = document.getElementById("changeimages");

day.addEventListener("click", function(){
    page.classList.remove("night");
    day.classList.add("active");
    nightBtn.classList.remove("active");
});

nightBtn.addEventListener("click", function(){
    page.classList.add("night");
    nightBtn.classList.add("active");
    day.classList.remove("active");
});