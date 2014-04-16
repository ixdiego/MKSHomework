function computerChoice() {

        var choice = Math.random();

        if (choice < 0.34) {
            choice = "rock";
        } else if (choice <= 0.67) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        return choice;

    }

   
    function compare(choice1, choice2) {

        if (choice1 === choice2) {
            return "you have tied with the almight computer!!";
        }

        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock wins!";
            } else {
                return "Paper wins!";
            }
        }

        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Paper wins!";
            } else {
                return "Scissors wins!";
            }
        }

        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "Scissors wins!";
            } else {
                return "Rock wins!";
            }
        }

    }

    // Event Handler for Rock
    $('#rock').on('click', function(){
       var result = compare('rock', computerChoice());
       $("#decision").html(result);
    });

    // Event Handler for Paper
    $('#paper').on('click', function(){
       var result = compare('paper', computerChoice());
       $("#decision").html(result);
    });

    // Event Handler for Scissors
    $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });