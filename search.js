function searchsoccer() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();

      

        const players = [
            "ronaldo",
            "cristiano",
            "messi",
            "lionel",
            "neymar jn",
            "neymar",
            "robert",
            "lewandowski",
            "mohamed",
            "salah",
            "kylian",
            "mbappe",
            "sergio",
            "ramos",
            "kevin",
            "bruyne",
            "kevin de bruyne",
            "karim",
            "benzema",
            "harry",
            "kane",
            "cristiano ronaldo",
            "lionel messi",
            "neymar jn",
            "robert lewandowski",
            "mohamed salah",
            "kylian mbappe",
            "sergio ramos",
            "karim benzema",
            "harry kane",
        ];

        const tournament = [
            "uefa",
            "champions",
            "league",
            "champions league",
            "uefa champions league",
            "conmebol",
            "sudamericana",
            "conmebol sudamericana",
            "europa",
            "uefa europa league",
            "europa league",
            "premier",
            "premier league",
        ];

        if (players.includes(searchTerm)) {
            window.location.href = "index.html#top-10";
        } else if (tournament.includes(searchTerm)) {
            window.location.href = "index.html#tournamentClubs";
        } else {
            alert("We Could not find this Category");
        }
    });
}

searchsoccer();
