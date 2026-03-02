let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let truno = true;
let count = 0;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (truno) {
      box.innerText = "X";
      truno = false;
    } else {
      box.innerText = "O";
      truno = true;
    }
    count++;
    box.disabled = true;
    let iswinner = checkwinner();
    if (count === 9 && !iswinner) {
      msg.innerText = "Match Draw";
      disabledboxes();
    }
  });
});

const restgame = () => {
  truno = true;
  enabledboxes();
  msg.innerText = "";
  count = 0;
};

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = " ";
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congtrualtion Winner ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const checkwinner = () => {
  for (pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
        return true;
      }
    }
  }
};
restbtn.addEventListener("click", restgame);
newgame.addEventListener("click", restgame);
