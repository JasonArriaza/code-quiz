$(document).ready(function () {
    var questions = [
        {
            question: "What is the styling language that you first learn in web development?",
            options: ["Bootstrap", "Bulma", "CSS"],
            correctAnswer: "CSS"
        },
        {
            question: "Which programming language is known for building dynamic web pages?",
            options: ["Java", "Python", "JavaScript"],
            correctAnswer: "JavaScript"
        },
        {
            question: "Which programming language is known for building the 'skeleton' of a web page",
            options: ["HTML", "CSS", "Bulma"],
            correctAnswer: "HTML"
        },
        {
            question: "Select one (1) from the options below that is a programming language.",
            options: ["Serpent", "Cobra", "Python"],
            correctAnswer: "Python"
        },
        {
            question: "What famous three words does Admiral Ackbar say in Star Wars: Return of the Jedi?",
            options: ["We're in trouble!", "It's a trap!", "We've been bamboozled!"],
            correctAnswer: "It's a trap!"
        },
    ];

    function endQuiz() {
        clearInterval(timerInterval);
        $("#content").html("<h2>Quiz completed!</h2>");
    }

    var currentQuestionIndex = 0;
    var timerSeconds = 30;
    var timerInterval;

    $("#startQuiz").on("click", function () {
        $("#content").empty();
        startTimer();
        displayQuestion(currentQuestionIndex);
    });

    function startTimer() {
        timerInterval = setInterval(function () {
            $("#timer").text("Time: " + timerSeconds + "s");
            timerSeconds--;

            if (timerSeconds < 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }



    function displayQuestion(index) {
        var currentQuestion = questions[index];
        var questionDiv = $("<div>").html("<h4>" + currentQuestion.question + "</h4>");

        // create buttons for each option
        for (var i = 0; i < currentQuestion.options.length; i++) {
            var optionButton = $("<button>").text(currentQuestion.options[i]);
            optionButton.on("click", function () {
                checkAnswer($(this).text(), currentQuestion.correctAnswer);
            });
            questionDiv.append(optionButton);
        }

        $("#content").append(questionDiv);
    }

    function checkAnswer(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                $("#content").empty();
                displayQuestion(currentQuestionIndex);
            } else {
                endQuiz();
            }
        } else {
            timerSeconds -= 5;

            // make sure the timer doesnt go below zero
            timerSeconds = Math.max(0, timerSeconds);

            // Check if the timer is still valid
            if (timerSeconds > 0) {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    $("#content").empty();
                    displayQuestion(currentQuestionIndex);
                } else {
                    endQuiz();
                }
            } else {
                endQuiz();
            }
        }

    }

});
