let usdTag = document.getElementById("usd");
let tongTien = document.getElementById("quy__doi");

function quyDoi() {
    let usd = parseFloat(usdTag.value);
    let tongTienDoi = usd * 235000;
    tongTien.innerText = "Quy đổi thành: " + tongTienDoi + " vnd";
}