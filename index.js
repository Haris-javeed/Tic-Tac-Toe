const gameResult = document.querySelector("#gameResult");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item5 = document.querySelector("#item5");
const item6 = document.querySelector("#item6");
const item7 = document.querySelector("#item7");
const item8 = document.querySelector("#item8");
const item9 = document.querySelector("#item9");

let items = [
    [item1, item2, item3],
    [item4, item5, item6],
    [item7, item8, item9]
];
let arr = [[], [], []];
let count = 0;
let started = 0;

for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
        items[i][j].addEventListener("click", function () {
            // if (count > 8) {
            //     check();

            // }
            if (count % 2 === 0 && this.textContent === "") {
                arr[i][j] = 1;
                this.textContent = "⨉";
                count++;
                check(1, 1);
            }
            else {
                if (this.textContent === "") {
                    arr[i][j] = 0;
                    this.textContent = "O";
                    count++;
                    check(0, 2);
                }
            }
        });
    }
}
function check(n, player) {
    let CheckCount = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length - 2; j++) {
            if (arr.length > 0) {
                if (arr[i][j] == n && arr[i][j + 1] == n && arr[i][j + 2] == n) {
                    items[i][j].classList.add("win");
                    items[i][j + 1].classList.add("win");
                    items[i][j + 2].classList.add("win");
                    gameResult.textContent = `Player ${player} wins`;
                    setTimeout(() => {
                        reset();
                    }, 1700);
                    CheckCount++;
                }
                else if (arr[j][i] == n && arr[j + 1][i] == n && arr[j + 2][i] == n) {
                    items[j][i].classList.add("win");
                    items[j + 1][i].classList.add("win");
                    items[j + 2][i].classList.add("win");
                    gameResult.textContent = `Player ${player} wins`;
                    setTimeout(() => {
                        reset();
                    }, 1700);
                    CheckCount++;
                }
                else if (arr[j][j] == n && arr[j + 1][j + 1] == n && arr[j + 2][j + 2] == n) {
                    items[j][j].classList.add("win");
                    items[j + 1][j + 1].classList.add("win");
                    items[j + 2][j + 2].classList.add("win");
                    gameResult.textContent = `Player ${player} wins`;
                    setTimeout(() => {
                        reset();
                    }, 1700);
                    CheckCount++;
                }
                else if (arr[j][j + 2] == n && arr[j + 1][j + 1] == n && arr[j + 2][j] == n) {
                    items[j][j + 2].classList.add("win");
                    items[j + 1][j + 1].classList.add("win");
                    items[j + 2][j].classList.add("win");
                    gameResult.textContent = `Player ${player} wins`;
                    setTimeout(() => {
                        reset();
                    }, 1700);
                    CheckCount++;
                }
                else if (count > 8 && CheckCount === 0) {
                    gameResult.textContent = "Draw";
                    setTimeout(() => {
                        reset();
                    }, 1700);
                }
            }

        }
    }

}

function reset() {
    arr = [[], [], []];
    count = 0;
    gameResult.textContent = "";
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            items[i][j].classList.remove("win");
            items[i][j].textContent = "";
        }
    }
}