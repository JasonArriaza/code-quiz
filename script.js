$(document).ready(function() {
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

    var currentQuestionIndex = 0; // Initialize index to 0

    $("#startQuiz").on("click", function() {
        $("#content").empty();
        displayQuestion(currentQuestionIndex); // Display the first question
    });

    function displayQuestion(index) {
        var currentQuestion = questions[index];
        var questionDiv = $("<div>").html("<h4>" + currentQuestion.question + "</h4>");

        // create buttons for each option
        for (var i = 0; i < currentQuestion.options.length; i++) {
            var optionButton = $("<button>").text(currentQuestion.options[i]);
            optionButton.on("click", function() {
                checkAnswer($(this).text(), currentQuestion.correctAnswer);
            });
            questionDiv.append(optionButton);
        }

        $("#content").append(questionDiv);
    }

    function checkAnswer(selectedOption, correctAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            $("#content").empty();
            displayQuestion(currentQuestionIndex);
        } else {
            $("#content").html("<h2>Quiz completed!</h2>");
        }
    }
});
































// Wait for the document to be ready
// $(document).ready(function() {
//     // Event listener for the "Start Quiz" button
//     $("#startQuiz").on("click", function() {
//         // Clear the content div
//         $("#content").empty();

//         // Call a function to display the first question
//         displayQuestion();
//     });

//     // Function to display the first question
//     function displayQuestion() {
//         // Create and append the HTML elements for the first question
//         // You can customize this part based on how you structure your quiz questions
//         // For example, you might create a new div for each question, with options, etc.
//         var questionDiv = $("<div>").html("<h4>What is the capital of France?</h4>");
//         var option1 = $("<button>").text("Paris");
//         var option2 = $("<button>").text("Berlin");
//         var option3 = $("<button>").text("London");
        
//         // Append the elements to the content div
//         $("#content").append(questionDiv, option1, option2, option3);
//     }
// });
