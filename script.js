var Questions = [{
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "String", isCorrect: false },
    { text: "Booleans", isCorrect: false },
    { text: "Alerts", isCorrect: true },
    { text: "Numbers", isCorrect: false }
    ]
 
},
{
    q: "The condition in an if / else statement is enclosed with...",
    a: [{ text: "Quotes", isCorrect: false, isSelected: false },
    { text: "Curly brackets", isCorrect: true },
    { text: "Parenthesis", isCorrect: false },
    { text: "Square brackets", isCorrect: false }
    ]
 
},
{
    q: "Arrays in JavaScript can be used to store...",
    a: [{ text: "Numbers and strings", isCorrect: false },
    { text: "Other arrays", isCorrect: false },
    { text: "Booleans", isCorrect: false },
    { text: "All of the above", isCorrect: true }
    ]
 
},
{
    q: "String values must be enclosed within what when being assigned to variables?",
    a: [{ text: "Commas", isCorrect: false },
    { text: "Curly brackets", isCorrect: false },
    { text: "Quotes", isCorrect: true },
    { text: "Parenthesis", isCorrect: false }
    ]
 
}
 
]
 
let currentQuestion = 0;
let score = 0;
var fetchButton = document.getElementById('btn');

 
function loadQues() {
    
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    const opener = document.querySelector(".opener");

    fetchButton.style.display = "none";

    question.textContent = Questions[currentQuestion].q;
    opener.innerHTML = "";
    opt.innerHTML = "";
    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.addEventListener("click", nextQuestion)
 
        choiceButton.textContent = Questions[currentQuestion].a[i].text;
        opt.appendChild(choiceButton);
    }
}
 
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `Your final score is ${score}.`;
}
 
 
function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAnswer() {

    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currentQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

fetchButton.addEventListener("click", loadQues);