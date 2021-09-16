const answers = document.querySelector(".answer-key");
const btn_submit = document.querySelector(".btn-submit");
const outputHere = document.querySelector(".outputHere");

const real_answer_key = ["Scalene",
    "Hypotenuse",
    "180°",
    "178°",
    "1/2 * height * base"
]

var score = 0;
btn_submit.addEventListener("click", function clickEventHandler() {
    const results = new FormData(answers);
    var i = 0;
    for (let value of results.values()) {
        if (value === real_answer_key[i]) {
            score++;
        }
        i++;
        console.log(i);
    }
    outputHere.innerText = ("Your score is :" + score);
})