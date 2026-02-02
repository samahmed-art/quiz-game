// script.js - basic quiz game

const questions = [
    {
        text: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Berlin"],
        correctIndex: 0
    },
    {
        text: "Which language runs in a web browser?",
        choices: ["Python", "C#", "JavaScript", "Java"],
        correctIndex: 2
    },
    {
        text: "2 + 2 * 2 = ?",
        choices: ["6", "8", "4", "2"],
        correctIndex: 0
    }
];

let current = 0;
let score = 0;
let timeLeft = 60;
let timerId = null;

// Ensure UI exists or create minimal one
function ensureUI() {
    if (!document.getElementById('quiz-root')) {
        const root = document.createElement('div');
        root.id = 'quiz-root';
        root.innerHTML = `
            <button id="start-btn">Start Quiz</button>
            <div id="quiz-container" style="display:none;">
                <div id="hud">
                    <span id="timer">Time: 60</span>
                    <span id="score" style="margin-left:16px">Score: 0</span>
                </div>
                <h2 id="question"></h2>
                <div id="answers"></div>
                <button id="next-btn" style="display:none;margin-top:12px;">Next</button>
            </div>
            <div id="result" style="margin-top:12px;"></div>
        `;
        document.body.appendChild(root);
    }
}
JSON.stringify(ensureUI());

const startBtn = document.getElementById('start-btn');      
