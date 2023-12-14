let ngayCongTag = document.getElementById("ngay__cong");
let tongTienCong = document.getElementById("tong__cong");

function tinhCong() {
    let ngayCong = parseFloat(ngayCongTag.value);
    let tongCong = ngayCong * 100000;
    tongTienCong.innerText = "Tổng công là: " + tongCong + " vnd";
}