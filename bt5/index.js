let numberTag = document.getElementById("number");
let tong = document.getElementById("result");

function tinh() {
    let number1 = Math.floor(parseFloat(numberTag.value) / 10);
    console.log(number1)
    let number2 = parseFloat(numberTag.value) % 10;
    console.log(number2)
    let tong1 = number1 + number2;
    tong.innerText = "Tổng 2 số: " + tong1;
}