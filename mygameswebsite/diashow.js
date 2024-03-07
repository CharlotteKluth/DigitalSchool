
//Hole Referenz auf Diashow Element aus dem HTML
const diashowElmts = document.getElementsByClassName("diashow");

animateDiashow(diashowElmts[0]);


function animateDiashow(diashowElmt) {

    //Wie viele Bilder sind in der Diashow?
    //Hole alle Bilder aus der Diashow
    const images = diashowElmt.getElementsByTagName("img");

    //Blende das erste Bild ein
    images[0].style.opacity = 1;

    //Erstelle einen Counter der das aktuelle angezeigte Bild speichert
    let counter = 0;

    //Erstelle ein Interval, dass alle zwei Sekunden das nöchste Bild anzeigt
    setInterval(function () {
       
        //Blende letztes Bild wieder aus
        images[counter].style.opacity = 0;

        //Erhöhe den COunter um eins
        counter++;

        //Wenn Counter bei Anzahl von Bildern angekommen ist, dann setze Counter auf 0
        if (counter === images.length) {
            counter = 0;
        }

        //Blende nächstes Bild ein
        images[counter].style.opacity = 1;
    }, 2000);

}



// let counter = 0;

// setInterval(function() {
//     counter++;
//     console.log(counter);
// }, 1000);

// setInterval(function () { 
//     document.body.innerHTML += "Hello" 
// }, 1000);