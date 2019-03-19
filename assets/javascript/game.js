$(document).ready(function () {

    var darthSidious = {
        id: "sidious",
        name: "Darth Sidious",
        health: 100,
        alive: true
    }

    var darthMaul = {
        id: "maul",
        name: "Darth Maul",
        health: 100,
        alive: true
    }

    var obiWanKenobi = {
        id: "kenobi",
        name: "Obi-Wan-Kenobi",
        health: 100,
        alive: true
    }

    var lukeSkywalker = {
        id: "skywalker",
        name: "Luke Skywalker",
        health: 100,
        alive: true
    }

    function attack(attacker, defender) {
        var attackerAP = Math.floor(Math.random() * 100);
        var defenderAP = Math.floor(Math.random() * 100);
        attacker.health -= defenderAP;
        if (attacker.health <= 0) {

        }
        defender.health -= attackerAP;
        if (defender.health <= 0) {

        }
        $("#attacking").html("You hit " + defender.name + " for " + attackerAP + " damage");
    }

    var yourCharacter = "";
    var yourEnemy = "";
    $("img").click(function (event) {
        if (yourCharacter == "") {
            $("#your-character").append("<img src='assets/images/" + event.target.id + ".jpg' />");
            yourCharacter = event.target.id;
        }
    })
})