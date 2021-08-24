function getEle(id) {
    return document.getElementById(id);
}
function calculateTip() {
    var totalBill = getEle("billamt").value;
    var percentTip = getEle("serviceQual").value;
    var numPeople = getEle("peopleamt").value

    // Validation Tổng hoá đơn và %
    if (totalBill == "" || percentTip == 0) {
        alert("Vui lòng Nhập tổng hoá đơn và mức độ hài lòng");
        // return;
    }

    // Validate số người góp
    if (numPeople == 0 || numPeople <= 1) {
        numPeople = 1;
        getEle("each").style.display = "none";
    } else {
        getEle("each").style.display = "block";
    }

    //Tính Toán
    var totalTip = (totalBill * percentTip) / numPeople;
    totalTip = Math.round(totalTip * 100) / 100;// Làm tròn phần thập phân có 2 chữ số
    totalTip = totalTip.toFixed(2);// Có 2 chữ số ở phần thậP phân
    getEle("tip").innerHTML = totalTip;

}
getEle("each").style.display = "none";
getEle("each").style.display = "none";
getEle("calculate").onclick = function () {
    calculateTip();
}