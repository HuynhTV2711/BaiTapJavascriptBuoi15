/**Sơ đồ 3 khối
 * Đầu vào:
 * Nhập vào thông tin cá nhân bao gồm: họ tên, tỏng thu nhập năm, số người phụ thuộc
 * Xử lí:
 * Thu nhập bị tính thuế = thu nhập chính - 4 triệu - số người phụ thuộc *1 triệu 6
 * Thu nhập <= 60 triệu thuế 5%
 * Thu nhập >60 triệu và <=120 triệu thuế 10%
 * Thu nhập >120 triệu và <=210 triệu thuế 15%
 * Thu nhập >210 triệu và <=384 triệu thuế 20%
 * Thu nhập >384 triệu và <=624 triệu thuế 25%
 * Thu nhập >624 tiệu và <=960 triệu thuế 30%
 * Thu nhập >960 triệu thuế 35%
 * Đầu ra:
 * Số tiền thuế phải đóng
 */

var btnTinhThue = document.querySelector(".btnTinhThue");

function tinhThue() {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhapNam = document.getElementById("thuNhapNam").value*1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value*1;
  var txtThue = document.querySelector(".txtThue");
  var thuNhapBiTinhThue = thuNhapNam - 4 - (soNguoiPhuThuoc*1.6);
  var trieu = 1000000;
  var thuePhaiDong =0;
  if (thuNhapNam <= 60) {
    thuePhaiDong = (thuNhapBiTinhThue/100)*5 * trieu;
  } else if (thuNhapNam <= 120) {
    thuePhaiDong = (thuNhapBiTinhThue/100)*10 * trieu;
  } else if(thuNhapNam <= 210){
    thuePhaiDong = (thuNhapBiTinhThue/100)*15 * trieu;
  }else if(thuNhapNam <= 384){
    thuePhaiDong = (thuNhapBiTinhThue/100)*20 * trieu;
  }else if(thuNhapNam <= 624){
    thuePhaiDong = (thuNhapBiTinhThue/100)*25 * trieu;
  }else if(thuNhapNam <= 960){
    thuePhaiDong = (thuNhapBiTinhThue/100)*30 * trieu;
  }else thuePhaiDong = (thuNhapBiTinhThue/100)*35 * trieu;
  txtThue.innerHTML = `Họ và tên: ${hoTen} | Thuế phải đóng là: ${thuePhaiDong.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;
}
btnTinhThue.onclick = tinhThue;
