"use strict";
function start() {
    var body = document.getElementById("bodyBackgorund");
    body.className = "bodyStyle";
    var nameInput = document.getElementById("nameInput").value;
    document.getElementById("show").innerHTML = "Välkommen" + " " + nameInput;
    document.getElementById("submitBtn").style.display = "none";
    if (nameInput == "") {
        alert("Ange ditt namn för att kunna gå vidare");
        location.reload();
    }
    document.getElementById("show").style.color = "black";
    document.getElementById("show").style.fontSize = "40px";
    document.getElementById("show").style.fontWeight = "bold";
    document.getElementById("nameInput").style.display = "none";
    var box = document.createElement("div");
    box.className = "boxDiv";
    document.body.appendChild(box);
    var question1Img = document.createElement("img");
    question1Img.setAttribute("src", "../img/pokemon_PNG129.png");
    question1Img.className = "questionImg";
    box.appendChild(question1Img);
}
//# sourceMappingURL=main.js.map