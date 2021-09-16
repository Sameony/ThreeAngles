const answers = document.querySelector(".answer-key");
const btn_submit = document.querySelector(".btn-submit");
const outputHereGib = document.querySelector(".outputHereGib");

const real_answer_key = ["Scalene",
    "Hypotenuse",
    "180°",
    "178°",
    "1/2 * height * base"
]


btn_submit.addEventListener("click", function clickEventHandler() {
    outputHereGib.innerText = ("");
    const results = new FormData(answers);
    var i = 0;
    var score = 0;
    for (let value of results.values()) {
        if (value === real_answer_key[i]) {
            score++;
        }
        i++;
        console.log(score);
    }
    outputHereGib.innerText = ("Your score is : " + score);
})