$(document).ready(function () {

    //questions & answers
    let questionOptions = [
        {
            question: "Name the largest continent in the world?",
            choices: ["Asia", "Europe", "Antarctica", "North America"],
            answer: 0,
            picture: "assets/images/asia.png",
        },
        {
            question: "Name the largest ocean in the world?",
            choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
            answer: 1,
            picture: "assets/images/pacific_ocean.png",
        },
        {
            question: "Name the largest desert in the world?",
            choices: ["Arabian", "Syrian", "Sahara", "Gobi"],
            answer: 2,
            picture: "assets/images/sahara_desert.jpg",
        },
        {
            question: "Name the longest river in the world?",
            choices: ["Amazon", "Mississippi", "Congo", "Nile"],
            answer: 3,
            picture: "assets/images/nile_river.png",
        },
        {
            question: "Name the tallest mountain range in the world?",
            choices: ["Himilaya", "Andes", "Kunlun", "Karakoram"],
            answer: 0,
            picture: "assets/images/himalaya.jpg",
        },
        {
            question: "Name the largest country in the world?",
            choices: ["United States", "Russia", "China", "Canada"],
            answer: 1,
            picture: "assets/images/russia.jpg",
        },
        {
            question: "Name the largest island in the world?",
            choices: ["Madagascar", "Great Britain", "Greenland", "New Guinea"],
            answer: 2,
            picture: "assets/images/greenland.jpg",
        },
        {
            question: "Name the highest mountain in the world?",
            choices: ["K2", "Mount Fuji", "Mount Kilimanjaro", "Mount Everest"],
            answer: 3,
            picture: "assets/images/mount_everest.jpg",
        }];

    console.log(questionOptions);


    let correctAnswers = 0;
    let wrongAnswers = 0;
    let unanswered = 0;
    let timer = 15;
    let running = false;
    let interval;
    let selection;
    let newArray = [];


    //event listener for start button to begin game and display first question
    $("#start").on("click", function () {
        $("#start").hide();
        showQuestion();
        startTimer();
        countDown();
    })

    //function to run timer
    function startTimer() {
        if (!running) {
            interval = setInterval(countDown, 1000 * 1);
            running = true;
        }
    }

    //function for timer count down
    function countDown() {
        $("#time-remaining").html("<h2>Time Remaining: " + timer + " Seconds<h2>");
        timer--;

        //timer stops at zero
        //-1 was chosen to display 0. If = to 0 timer displays one and ends game
        if (timer === -1) {
            stop();
            unanswered++;
            $("#answerBox").html("<h2> Time's Up! The correct answer is: " + selection.choices[selection.answer] + "</h2>");
            showPic();
        }
    }

    //function to stop timer
    function stop() {
        running = false;
        clearInterval(interval);
    }

    //function to show question on screen
    function showQuestion() {

        //this will select a random index from the questionOptions 
        let index = Math.floor(Math.random() * questionOptions.length);
        selection = questionOptions[index];
        console.log(selection);

        $("#questionBox").html("<h2>" + selection.question + "</h2>");

        //this will display the array contents for the available choices
        for (let i = 0; i < selection.choices.length; i++) {
            let userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.html(selection.choices[i]);
            userChoice.attr("data-guessvalue", i);
            $("#answerBox").append(userChoice);
        }


        //event listener answer choices displayed
        $(".answerChoice").on("click", function () {
            let userGuess = parseInt($(this).attr("data-guessvalue"));

            if (userGuess === selection.answer) {
                stop();
                correctAnswers++;
                // userGuess = "";
                console.log(userGuess);
                $("#answerBox").html("<h2>That's Correct!</h2>");
                showPic();
            }
            else {
                stop();
                wrongAnswers++;
                console.log(userGuess);
                $("#answerBox").html("<h2>Sorry! The correct answer is: " + selection.choices[selection.answer] + "</h2>");
                showPic();
            }
        })

        function showPic (){
            $("#answerBox").append("<img src=" + selection.picture + " width = 250px>")
            newArray.push(selection);
            questionOptions.splice(index, 1);
        }


    }






});
