const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")
const resultList = document.getElementById("result-list")
resultList.style.display = "none";

searchBtn.addEventListener("click", function ()  {
    
    const query = searchInput.value.trim();

    if(query === ""){
        alert("please enter a value into the search box")
        
        return
    }

    searchBooks(query)

})


function searchBooks(query) {
    
    resultList.innerHTML = "";
    

    let url = "https://openlibrary.org/search.json?q=" + encodeURIComponent(query) + "&limit=10";

    fetch(url)
        .then(function (response) {
            return response.json();
        }) 
        .then(function (data) {

            displayBooks(data.docs);
        })


}

function displayBooks(books) {
    books.forEach(function (book) {

        resultList.style.display = "grid";

        const title = book.title;
        const authors = book.author_name;

        const item = document.createElement("div")
        item.classList.add("book-item");

        item.innerHTML= `
            <h3>${title}</h3>
            <p> <span class="author">Author:</span> ${authors}</p>
            <p><a href="https://openlibrary.org${book.key}" target="_blank"> View on openlibrary </a></p>


        `;

        resultList.appendChild(item);

    })

}