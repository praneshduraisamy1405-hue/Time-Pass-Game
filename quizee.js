const quizData = [

/* Geography & Places */
{
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
},
{
    question: "What is the largest ocean in the world?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2
},
{
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: 2
},
{
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Tokyo", "Osaka", "Seoul"],
    answer: 1
},
{
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctica", "Thar"],
    answer: 2
},
{
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: 1
},

/* Science & Nature */
{
    question: "How many elements are in the periodic table?",
    options: ["116", "117", "118", "119"],
    answer: 2
},
{
    question: "What is the hardest natural substance on Earth?",
    options: ["Iron", "Gold", "Diamond", "Silver"],
    answer: 2
},
{
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    answer: 2
},
{
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    answer: 2
},
{
    question: "Liquid changing into gas is called?",
    options: ["Condensation", "Evaporation", "Freezing", "Melting"],
    answer: 1
},
{
    question: "Chemical symbol Fe stands for?",
    options: ["Fluorine", "Iron", "Zinc", "Copper"],
    answer: 1
},

/* History & GK */
{
    question: "Who invented the telephone?",
    options: ["Edison", "Tesla", "Alexander Graham Bell", "Newton"],
    answer: 2
},
{
    question: "In which year did Titanic sink?",
    options: ["1905", "1912", "1918", "1920"],
    answer: 1
},
{
    question: "Father of Modern Physics?",
    options: ["Newton", "Einstein", "Galileo", "Bohr"],
    answer: 1
},
{
    question: "Who wrote Indian national anthem?",
    options: ["Bharathi", "Bankim Chandra", "Tagore", "Nehru"],
    answer: 2
},
{
    question: "Father of Geometry?",
    options: ["Euclid", "Pythagoras", "Aristotle", "Archimedes"],
    answer: 0
},
{
    question: "World War II duration?",
    options: ["1914–1918", "1939–1945", "1941–1946", "1935–1940"],
    answer: 1
},

/* Mixed Trivia */
{
    question: "Which bird lays the largest eggs?",
    options: ["Hen", "Eagle", "Ostrich", "Duck"],
    answer: 2
},
{
    question: "Main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Potato"],
    answer: 1
},
{
    question: "Players in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: 2
},
{
    question: "Who painted the Mona Lisa?",
    options: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"],
    answer: 2
},
{
    question: "Currency of Japan?",
    options: ["Won", "Dollar", "Yen", "Euro"],
    answer: 2
},
{
    question: "Ship of the Desert?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    answer: 1
}

];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = quizData[current];
    questionEl.textContent = q.question;

    options.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.disabled = false;
        btn.style.background = "";
    });

    scoreEl.textContent = "Score: " + score;
    nextBtn.style.display = "none";
}

function checkAnswer(i) {
    let correct = quizData[current].answer;
    options.forEach(btn => btn.disabled = true);

    if (i === correct) {
        score++;
        options[i].style.background = "lightgreen";
    } else {
        options[i].style.background = "salmon";
        options[correct].style.background = "lightgreen";
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    current++;
    if (current < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "🎉 Quiz Finished! Score: " + score;
        options.forEach(btn => btn.style.display = "none");
        nextBtn.style.display = "none";
    }
}

loadQuestion();
