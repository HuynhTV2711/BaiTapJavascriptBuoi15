/**
 * Sơ đồ 3 khối
 * Đầu vào: họ và tên và số kw tiêu thụ
 * Xử lí: khoảng điện tieu thụ và giá
 * 50kw đầu : 500d/kw
 * 50kw kế : 650d/kw
 * 100kw kế : 850d/kw
 * 150kw kế : 1100d.kw
 * Còn lại : 1300d/kw
 * 
 * Đầu ra: tiền điện
 */

function tinhTienDien(){
    var hoTen = document.getElementById("hoTen").value;
    var dienTieuThu =  document.getElementById("dienTieuThu").value*1;
    var tienDien =0;
    if (dienTieuThu<=50) {
        tienDien = dienTieuThu * 500;
    }else
    if (dienTieuThu>50 && dienTieuThu <=100){
        tienDien= 50 * 500 + (dienTieuThu -50)* 650;
    }else
    if (dienTieuThu > 100 && dienTieuThu <=200) {
        tienDien= 50 * 500 + 50* 650 + (dienTieuThu-100)*850;
    }else
    if (dienTieuThu > 200 && dienTieuThu <=350) {
        tienDien= 50 * 500 + 50* 650 + 100*850 +(dienTieuThu- 200) *1100;
    }else
    if (dienTieuThu > 350) {
        tienDien= 50 * 500 + 50* 650 + 100*850 + 150 *1100 +(dienTieuThu - 350)*1300; 
    }
    document.querySelector(".txtTinhTienDien").innerHTML = ` Hộ gia đình ${hoTen} tiền điện tháng này là ${tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;

}
document.querySelector(".btnTinhTienDien").onclick = tinhTienDien;
    