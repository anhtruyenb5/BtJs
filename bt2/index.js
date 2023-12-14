let number1Tag = document.getElementById("number1");
let number2Tag = document.getElementById("number2");
let number3Tag = document.getElementById("number3");
let number4Tag = document.getElementById("number4");
let number5Tag = document.getElementById("number5");
let tongTB = document.getElementById("tb__cong");


function tinhTB() {
    let number1 = parseFloat(number1Tag.value);
    let number2 = parseFloat(number2Tag.value);
    let number3 = parseFloat(number3Tag.value);
    let number4 = parseFloat(number4Tag.value);
    let number5 = parseFloat(number5Tag.value);
    let tongTBCong = (number1 + number2 + number3 + number4 + number5) / 5;
    tongTB.innerText = "Trung bình cộng là: " + tongTBCong;
}