let arr = [];
let player = 1;
function drawGreenGame() {
    let html = "";

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        html += "<tr>";
        for (let j= 0; j < 3; j++) {
            arr[i][j] = "*"
            html += `<td id="td-${i}-${j}" onclick="clickColumn(${i}, ${j})"></td>`;
        }
        html += "</tr>";
    }

    document.getElementById('main').innerHTML = html;
}

console.log(arr)

drawGreenGame();

function clickColumn(x,y) {
    if (player == 1) {
        document.getElementById(`td-${x}-${y}`).innerHTML = "X";
        player = 2;
        arr[x][y] = "X"
    } else {
        document.getElementById(`td-${x}-${y}`).innerHTML = "O";
        player = 1;
        arr[x][y] = "O"
    }
    checkWin()
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] != "*" &&
                arr[i][j] === arr[i][j+1]
                && arr[i][j] === arr[i][j+2]) {
                alert('Win')
                return;
            }
            if (arr[i][j] != "*" &&
                arr[i][j] === arr[i+1][j]
                && arr[i][j] === arr[i+2][j]) {
                alert('Win')
                return;
            }

            if (arr[i][j] != "*" &&
                arr[i][j] === arr[i+1][j+1]
                && arr[i][j] === arr[i+2][j+2]) {
                alert('Win')
                return;
            }

            if (arr[i][j] != "*" &&
                arr[i][j] === arr[i-1][j-1]
                && arr[i][j] === arr[i-2][j-2]) {
                alert('Win')
                return;
            }

        }
     }
}
