// create questions here
let requestURL = 'quiz.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        var myJSON = JSON.parse(request.responseText);
            myFunction(myJSON);
        }
    };
request.open("GET", requestURL, true);
request.send();
let questions = [new Question("พร้อมแล้วกดเริ่ม", ["เริ่ม","เริ่ม","เริ่ม","เริ่ม"], "null")];
console.log(String.fromCharCode(67) + String.fromCharCode(79) + String.fromCharCode(80) + String.fromCharCode(89)+ "?")
function myFunction(myObj) {
    for (let i = 0; i < myObj.length; i++) {
        questions.push( new Question(myObj[i].quiz, myObj[i].choice, myObj[i].check) );
    }
}
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "ข้อ " + currentQuestionNumber + " จาก " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>คะแนน</h1>";
    gameOverHTML += "<h2 id='score'> ผลคะแนน: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();