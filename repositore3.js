function printRandomNumber(randomNumber = 0) {

    if (randomNumber > 10 || randomNumber < 1) {
        alert("რიცხვი უნდა იყოს 1 დან 10მდე");
        return;
    }

    let correctNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber == correctNumber) {
        alert("გილოცავთ, თქვენ გამოიცანით რიცხვი.");
        return;
    }

    if (randomNumber > correctNumber) {
        alert("ძალიან მაღალია. სცადეთ ხელახლა.");
    }else {
        alert("ძალიან დაბალია, სცადეთ ხელახლა.");
    }

    alert("ჩაფიქრებული რიცხვი იყო: " + correctNumber);
}

let randomNumber = Math.floor(prompt("გამოიცანით რიცხვი 1 დან 10 ის ჩათვლით"));
printRandomNumber(randomNumber);
