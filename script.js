async function quote(){
    const quotetext = document.getElementById("quotetext");
    const authors = document.getElementById("authors");

    try{


        const response = await fetch("https://dummyjson.com/quotes");

        if(!response.ok){
            throw new Error("Failed to fetch quote or no internet access");
        }

        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.quotes.length);

        quotetext.innerHTML = " " + data.quotes[randomIndex].quote;
        authors.innerHTML = "— " + data.quotes[randomIndex].author;

    }catch(error){
        window.alert("Error: " + error.message);

    }


}

const newQuotes = document.getElementById("new-quotes");


newQuotes.addEventListener("click", quote);