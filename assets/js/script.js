function feedback_badge(value) {
    let level_badge = document.querySelector("#level-badge");
    let level_number = document.querySelector("#level-number");

    if (value <= 1000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='ferro'>Iron</p>";
    } else if (value >= 1001 && value <= 2000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='bronze'>Bronze</p>";
    } else if (value >= 2001 && value <= 5000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='prata'>Silver</p>";
    } else if (value >= 5001 && value <= 7000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='ouro'>Gold</p>";
    } else if (value >= 7001 && value <= 8000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='platina'>Platinum</p>";
    } else if (value >= 8001 && value <= 9000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='ascendente'>Ascendent</p>";
    } else if (value >= 9001 && value <= 10000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='imortal'>Immortal</p>";
    } else if (value > 10000) {
        level_number.innerHTML = value;
        level_badge.innerHTML = "<p class='radiante'>Radiant</p>";
    }
}