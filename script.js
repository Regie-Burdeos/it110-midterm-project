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

        quotetext.innerHTML = "“ " + allQuotes[randomIndex].quote + "”";
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