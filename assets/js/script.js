function calculate() {
    let wins = document.querySelector("#wins").value;
    let loses = document.querySelector("#loses").value;
    let output = document.querySelector("#output");

    let victories = wins - loses;

    if (victories < 10) {
        result = "iron";
    } else if (victories >= 11 && victories <= 20) {
        result = "bronze";
    } else if (victories >= 21 && victories <= 50) {
        result = "silver";
    } else if (victories >= 51 && victories <= 80) {
        result = "gold";
    } else if (victories >= 81 && victories <= 90) {
        result = "diamond";
    } else if (victories >= 91 && victories <= 100) {
        result = "legendary";
    } else if (victories >= 101) {
        result = "immortal";
    } else {
        alert("ERROR: Try Again!");
    }
    output.innerHTML = `<h1>The hero has ${victories} victories and your rank is <span style ="color: var(--${result});">${result}!</h1>`;
}