
// fetch request
fetch("./adressbok-1.json")
.then(function(resp) {
    return resp.json();
})

// funktion som hämta all data från json filen
.then(function(data) {
    var info = "";

    for(i = 0; i < data.length; i++){

        // sorterar efter yngst först
        data.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));

        // hämtar datan från json
        info +=  
                "<li>Efternamn: " + data[i].lastname + "</li>" + 
                "<li>Förnamn: " + data[i].firstname + "</li>" +
                "<li>Email: <a href=''>" + data[i].email + "</a></li>" +
                "<li>&nbsp;</li>";

        // skriver ut datan
        document.getElementById("info-ul").innerHTML = info;
    }
})
// skriver ut felmeddelande
.catch(err => {
    document.write(err);
});