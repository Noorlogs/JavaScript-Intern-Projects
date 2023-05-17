function getNum(num) {
    document.getElementById('result').value += num;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function clearNum() {
    let last = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, last.length - 1);
}

function getResult() {
    document.getElementById('result').value = eval(document.getElementById('result').value)
}

function square() {
    var num = Number(document.getElementById('result').value);
    var squareValue = num * num;
    document.getElementById('result').value = squareValue;
}

function cube() {
    var num = Number(document.getElementById('result').value);
    var cubeValue = Math.pow(num, 3);
    document.getElementById('result').value = cubeValue;
}

function per(num) {
    console.log(document.getElementById('result').value = (num * 100) + "%")
}

function factorial() {
    let n = document.getElementById('result').value;
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    document.getElementById('result').value = result;
}

function mod() {
    let val = document.getElementById('result').value;
    val %= 2;
    document.getElementById('result').value = val;
    document.getElementById('result').value = val;
}