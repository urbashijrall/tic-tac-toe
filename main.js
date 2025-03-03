let btns = document.querySelectorAll(".btn");
let msgCont = document.querySelector(".msg-container");
let msgInfo = document.querySelector(".msg-info");
let newGame = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button was Clicked!!", btn.className);
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});
const checkWinner = () => {
  let isWinner = false; // Flag to track if a winner is found

  for (let pattern of winningPatterns) {
    let pos1val = btns[pattern[0]].innerText;
    let pos2val = btns[pattern[1]].innerText;
    let pos3val = btns[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        msgCont.classList.remove("hide");
        msgInfo.innerText = "Winner: " + pos1val;
        disablebtn();
        isWinner = true; // Set winner flag to true
        return; // Stop further execution
      }
    }
  }

  // Check for a draw if there is no winner
  let allFilled = [...btns].every((btn) => btn.innerText !== "");

  if (!isWinner && allFilled) {
    msgCont.classList.remove("hide");
    msgInfo.innerText = "It's a Draw!"; // Show draw message
  }
};

const disablebtn = () => {
  btns.forEach((btn) => {
    if (btn.innerText === "") {
      btn.disabled = true;
    }
  });
};
const enablebtn = () => {
  btns.forEach((btn) => {
    if (btn.innerText === "") {
      btn.disabled = false;
    }
  });
};

newGame.addEventListener("click", () => {
  btns.forEach((btn) => {
    btn.innerText = "";
  });
  enablebtn();
  msgCont.classList.add("hide");
  turnO = true;
});

resetBtn.addEventListener("click", () => {
  btns.forEach((btn) => {
    btn.innerText = "";
  });
  enablebtn();
  msgCont.classList.add("hide");
  turnO = true;
});
