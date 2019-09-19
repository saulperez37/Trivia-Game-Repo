$(document).ready(function () {

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
        let hold = [];


        $("#start").on("click", function () {
            $("#start").hide();

            // for(let i = 0; i < questionOptions.length; i++){
            //     hold.push(questionOptions[i]);
            // }
        })

        function startTimer () {
            if(!)
        }


});
