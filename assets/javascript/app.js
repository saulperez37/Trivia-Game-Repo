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
            picture: "assets/images/sahara_desert.png",
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
    let userGuess = "";
    let timer = 20;
    let running = false;



    //event listener for start button to begin game and display first question
    $("#start").on("click", function () {
        $("#start").hide();
        startTimer();
        showQuestion();
    })

    //function to run timer
    function startTimer() {
        if (!running) {
            let interval = setInterval(countDown, 1000 * 1);
            running = true;
        }
    }

    //function for timer count down
    function countDown() {
        $("#time-remaining").html("<h2>Time Remaining: " + timer + " Seconds<h2>");
        timer--;
        // console.log(timer);
    }

    //function to show question on screen
    function showQuestion() {

        let index = Math.floor(Math.random() * questionOptions.length);
        let selection = questionOptions[index];
        console.log(selection);

        $("#questionBox").html("<h2>" + selection.question + "</h2>");

        for (let i = 0; i < selection.choices.length; i++) {
            let userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.html(selection.choices[i]);
            userChoice.attr("data-guessvalue", i);
            $("#answerBox").append(userChoice);

        }


        // for (let j = 0; j < questionOptions.length; j++){
        //     selection = questionOptions[j];
        //     console.log(selection);

    }






});
