let daiTag = document.getElementById("chieu__dai");
let rongTag = document.getElementById("chieu__rong");
let ketqua = document.getElementById("result");

function tinhCV() {
    let dai = parseFloat(daiTag.value);
    let rong = parseFloat(rongTag.value);
    let chuVi = (dai + rong) * 2;
    ketqua.innerText = "Chu vi là: " + chuVi;
}

function tinhDT() {
    let dai = parseFloat(daiTag.value);
    let rong = parseFloat(rongTag.value);
    let dienTich = dai * rong;
    ketqua.innerText = "Diện tích là: " + dienTich;
}