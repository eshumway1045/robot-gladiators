var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    //alerts player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = (window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose."));

    if (promptFight === "fight" || promptFight === "FIGHT") {
        //subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;

        // log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //subtract the value of enemyAttack from the value of playerHealth and us that result to update the value in the enemyHealth variable
        playerHealth = playerHealth - enemyAttack;
        // log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = (window.confirm("Are you sure you'd like to quit?"));
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no(false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need ot shoose a valid option. Try again!");
    }
}
// game states
// "win" - player robot has defeated all enemy-robots
// * Fight all enemy-robots

// "lose" - player robot has been defeated

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}