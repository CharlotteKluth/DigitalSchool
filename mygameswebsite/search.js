const games = document.querySelectorAll(".card");
const searchInput = document.querySelector("#js-search-games");

searchInput.addEventListener("keyup", filterBySearch);

function filterBySearch() {
    const searchValue = searchInput.value.toLowerCase();

    //Gehe durch alle Spiele und überprüfe ob Suchwert in Titel enthalten ist
    for(let game of games) {
        const title = game.querySelector(".card-title").innerText.toLowerCase();
        if(title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    }
    
}