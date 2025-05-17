const quizData = [
    {
        question: "What is the goal of SDG 4?",
        options: [
            "Ensure clean water and sanitation for all",
            "Promote lifelong learning and inclusive education",
            "Reduce inequality within and among countries",
            "Achieve gender equality and empower women"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a key target of SDG 4?",
        options: [
            "Providing free and equitable primary and secondary education",
            "Improving road infrastructure",
            "Protecting marine ecosystems",
            "Increasing agricultural productivity"
        ],
        correct: 0
    },
    {
        question: "What does SDG 4 emphasize?",
        options: [
            "Economic growth through industrialization",
            "Environmental conservation",
            "Quality education for all",
            "Developing space exploration programs"
        ],
        correct: 2
    },
    {
        question: "Which organization is responsible for monitoring SDG 4 progress?",
        options: [
            "World Health Organization (WHO)",
            "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
            "International Monetary Fund (IMF)",
            "World Trade Organization (WTO)"
        ],
        correct: 1
    },
    {
        question: "How can individuals support SDG 4?",
        options: [
            "By investing in cryptocurrency",
            "By advocating for equal education opportunities",
            "By planting more trees",
            "By increasing global trade"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

loadQuestion();

function loadQuestion() {
    const q = quizData[currentQuestion];
    quizBox.innerHTML = `
        <h2>${q.question}</h2>
        <div class="options">
            ${q.options.map((option, index) =>
                `<label>
                    <input type="radio" name="answer" value="${index}"> ${option}
                </label><br>`
            ).join('')}
        </div>
    `;

    if (currentQuestion < quizData.length - 1) {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    } else {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    }
}

nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }

    if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
});

submitBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return;
    }

    if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
        score++;
    }

    quizBox.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score is: <strong>${score}/${quizData.length}</strong></p>
        <p>${score >= 3 ? "Great job! You understand SDG 4 well!" : "Keep learning about SDG 4!"}</p>
        <a href="index.html" class="back-home">← Back to Home</a>
    `;
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
});