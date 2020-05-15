function start() {
    let body = (<HTMLInputElement>document.getElementById("bodyBackgorund"));
    body.className = "bodyStyle";

    let nameInput = (<HTMLInputElement>document.getElementById("nameInput")).value;
    (<HTMLElement>document.getElementById("show")).innerHTML =  "Välkommen" + " " + nameInput;
    (<HTMLElement>document.getElementById("submitBtn")).style.display = "none";


    if(nameInput == ""){
        alert("Ange ditt namn för att kunna gå vidare");
        location.reload();
    }

    (<HTMLElement>document.getElementById("show")).style.color = "black";
    (<HTMLElement>document.getElementById("show")).style.fontSize = "40px";
    (<HTMLElement>document.getElementById("show")).style.fontWeight = "bold";
    (<HTMLInputElement>document.getElementById("nameInput")).style.display = "none";
   
    
    const box = document.createElement("div");
    box.className = "boxDiv";
    document.body.appendChild(box);

    let question1Img = document.createElement("img");
    question1Img.setAttribute("src", "../img/pokemon_PNG129.png");
    question1Img.className = "questionImg";
    box.appendChild(question1Img);


}

