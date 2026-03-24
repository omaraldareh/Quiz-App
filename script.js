// const title = $("h1")
// console.log(title)
// title.css("color","red")

// const btn = $(".btn")
// btn.click(() => {
//     alert("Clicked")
// })
// btn.css({
//     "background-color":"white",
//     "color":"black",
//     "border":"solid 1px grey",
//     "padding":"10px",
//     "cursor":"pointer",
// })

// const card = $(".card")
// card.css({
//     "border":"2px solid black",
//     "padding":"10px",
//     "background-color":"white",
//     "color":"black",
//     "width":"20%",
//     "margin-top":"10px"
// })

// const card_title = $(
//     "<h1>Omar<h1/>"
// )

// const card_body = $(`
//     <div>
//         <p>lo;mvmsa;lmsamasm;slam;lmdmsa;mdsa</p>
//         <button>ADD</button>
//     </div>
// `);

// card.append(card_title)
// card.append(card_body)

let Header = $(".Header")
Header.css({
    "background-color":"#0e0eaf",
    "height":"45px",
    "display":"flex",
    "justify-content":"center",
    "align-items":"center",
    "color":"white",
    "font-weight": "bold",
    "font-size": "24px",
    "padding": "9px"
})

let userAnswers = []


let Questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which color is the sky on a clear day?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answer: "Lion"
  },
  {
    question: "How many days are in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "What is 10 ÷ 2?",
    options: ["2", "3", "5", "10"],
    answer: "5"
  },
  {
    question: "Which device is used to control the cursor?",
    options: ["Keyboard", "Mouse", "Monitor", "Printer"],
    answer: "Mouse"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "High Text Machine Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "How many colors are in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "What do bees make?",
    options: ["Milk", "Water", "Honey", "Juice"],
    answer: "Honey"
  }
]

let question = $(".question")
question.css({
    "display":"flex",
    "justify-content":"center",
    "align-items":"center",
    "padding":"29px",
    "border-radius":"15px",
    "margin":"24px 20px 2px 20px",
    "background-color": "#fffffff5",
    "font-size": "25px",
    "font-weight": "bold",
    "padding-top": "40px",
    "padding-bottom": "40px"
})

let currentIndex = 0;
function ShowQuestion(){
    let q = Questions[currentIndex];
    $(".question").text(`Question ${currentIndex + 1}: ${q.question}`);
}

let Progress = $(".Progress")
Progress.css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "padding": "15px",
    "background-color": "white",
    "width": "25%",
    "margin": "auto",
    "margin-top": "15px",
    "border-radius": "15px",
    "font-size": "18px"
})

function ShowProgress(){
    $(".Progress").text(`Question ${currentIndex + 1} of ${Questions.length}`);
}



function ShowAnswers() {
    let A = Questions[currentIndex];
    let optionsDiv = $(".options");
    optionsDiv.css({
            "display": "flex",
            "flex-direction": "column",
            "gap": "10px",
            "width": "30%",
            "justify-content": "center",
            "margin": "auto",
            "margin-top": "22px",
    })
    optionsDiv.empty(); 

    A.options.forEach((option,index) => {
       let btn = $(`
        <div class="option">
            <span class="num">${index + 1}</span> ${option}
        </div>`);
        btn.css({
            "position": "relative",
            "display": "flex",
            "justify-content": "center", 
            "align-items": "center",
            "background-color": "white",
            "padding": "15px",
            "border-radius": "10px",
            "cursor": "pointer",
            "font-size": "19px"
        })
        btn.find(".num").css({
            "position": "absolute",
            "left": "10px",
            "background": "#0e0eaf",
            "color": "white",
            "border-radius": "50%",
            "width": "25px",
            "height": "25px",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "font-size": "14px",
            "padding":"2px"
        });

        if(userAnswers[currentIndex] === option){
            btn.css("background-color", "grey");
        }
        optionsDiv.append(btn);
    });
}
let Next = $(".Next")
Next.css({
    "position":"fixed",
    "bottom":"20px",
    "right":"20px",
    "padding":"15px",
    "border-radius":"50%",
    "border-radius": "22%",
    "background-color": "white",
    "cursor": "pointer",
});

let Back = $(".Back")
Back.css({
    "position":"fixed",
    "bottom":"20px",
    "right":"95px",
    "padding":"15px",
    "border-radius":"50%",
    "border-radius": "22%",
    "background-color": "white",
    "cursor": "pointer"
});

// function updateNextButton(){
//     if(currentIndex === Questions.length - 1){
//         $(".Next").text("Finish");
//     } else {
//         $(".Next").text("Next");
//     }
// }

function updateButtons(){
    if(currentIndex === 0){
        $(".Back").addClass("disabled");
    } else {
        $(".Back").removeClass("disabled");
    }

    if(currentIndex === Questions.length - 1){
        $(".Next").text("Finish");
    } else {
        $(".Next").text("Next");
    }
}

// $(".Next").on("click",() => {
//     if(currentIndex < Questions.length-1){
//         currentIndex++
//         ShowQuestion();
//         ShowAnswers();
//         ShowProgress();
//         updateButtons();
//     }
// })

$(".Back").on("click", () => {
    if(currentIndex > 0){
        currentIndex--;

        ShowQuestion();
        ShowAnswers();
        ShowProgress();
        updateButtons();
    }
});

$(document).on("click", ".option", function(){
    let selected = $(this).contents().filter(function() {
        return this.nodeType === 3; 
    }).text().trim();
    userAnswers[currentIndex] = selected;
    $(".option").css("background-color", "white");
    $(this).css("background-color", "grey");
});

function calculateScore(){
    let score = 0;

    Questions.forEach((q, index) => {
        if(userAnswers[index] === q.answer){
            score++;
        }
    });

    return score;
}

$(".Next").on("click", () => {
    if(currentIndex === Questions.length - 1){
        let score = calculateScore();
        Swal.fire({
            title:"Quiz Completed!",
            html: `You got <b>${score}</b> from <b>${Questions.length} correct answers</b>`,
            icon: score >= 5 ? 'success' : 'info',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#0e0eaf',
            showCancelButton: true,
            cancelButtonText: 'Close',
        }).then((result) => {
        if (result.isConfirmed) {
            location.reload(); 
        }
    });
        return; 
    }
    currentIndex++;
    ShowQuestion();
    ShowAnswers();
    ShowProgress();
    updateButtons();
});

calculateScore()
ShowQuestion();
ShowProgress();
ShowAnswers();
updateButtons();