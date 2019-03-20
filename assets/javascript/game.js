$(document).ready(function () {

    var characters = [
        {
            id: "1",
            name: "Darth Maul",
            health: 100,
            alive: true
        },
        {
            id: "2",
            name: "Darth Sidious",
            health: 100,
            alive: true
        },
        {
            id: "3",
            name: "Obi-Wan-Kenobi",
            health: 100,
            alive: true
        },
        {
            id: "4",
            name: "Luke Skywalker",
            health: 100,
            alive: true
        }

    ]

    function attack(attackerID, defenderID) {
        var attackerAP = Math.floor(Math.random() * 100);
        var defenderAP = Math.floor(Math.random() * 100);
        // if (attacker.health <= 0) {

        // }
        // if (defender.health <= 0) {

        // }

        Object.keys(lukeSkywalker).forEach(function(key){
            console.log(key, lukeSkywalker[key]);
        })
        
        $("#attacking").html("You hit " + defender.name + " for " + attackerAP + " damage");
    }

    var yourCharacter = "";
    var yourEnemy = "";
    $("img").click(function (event) {
        if (yourCharacter == "") {
            $("#your-character").append("<img id='" + event.target.id + "' src='assets/images/" + event.target.id + ".jpg' />");
            $("#characters").html("");
            yourCharacter = event.target.id;

            for (var i = 1; i <= 4; i++) {
                if (i != event.target.id) {
                    $("#enemies").append("<img id='" + i + "' src='assets/images/" + i + ".jpg' />");
                }
            }

        }
        $("img").click(function (event) {
            if (yourEnemy == "") {
                $("#defender").append("<img id='" + event.target.id + "' src='assets/images/" + event.target.id + ".jpg' />");
                yourEnemy = event.target.id;
            }
        })

    })


    $("#attack").click(function () {
        var attackerID = $("#your-character > img").attr("id");
        var defenderID = $("#defender > img").attr("id");
        attack(attackerID, defenderID);
    })
})
