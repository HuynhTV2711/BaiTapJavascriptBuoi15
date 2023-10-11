/**
 * Mô hình 3 khối:
 * Đầu vào:
 * Loại khách hàng: nhà dân hoặc doanh nghiệp
 * Mã khách hàng
 * Số kết nối khi loại khách hàng là doanh nghiệp
 * Số kênh cao cấp
 * Xử lí:
 * - Tiền cáp = Phí Xử lý hóa đơn + Phí dịch vụ cơ bản + thuê kênh cao cấp
 * - Nếu là doanh nghiệp thì có thêm số kết nối, phí dịch vụ cơ bản 75$ cho 10 kết nối đầu, số kết nối thêm 5$/kết nối
 * Đầu ra:
 * Tiền cáp
 */



var btnTinhTien = document.querySelector(".btnTinhTien");
    document.querySelector("#loaiKhachHang").onclick= function(){
        if(document.getElementById("loaiKhachHang").value == "Doanh Nghiệp"){
            document.getElementById("soKetNoi").style.display = "block";
        }
    }
function tinhTienCap(){
    var tienCap = 0;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var kenhCaoCap = document.getElementById("kenhCaoCap").value*1;
    var txtTienCap = document.querySelector(".txtTienCap");
    if (loaiKhachHang == "Doanh Nghiệp") {
        if(soKetNoi<=10){
            tienCap =15 + 50*kenhCaoCap +75;
        }else tienCap = 15 + 50*kenhCaoCap +75 + (soKetNoi-10)*5;
    }else{
        tienCap = 4.5 + 20.5 + 7.5*kenhCaoCap;
    }
txtTienCap.innerHTML=` Mã khách hàng ${maKhachHang}, Tiền cáp ${tienCap}$`
}
btnTinhTien.onclick =tinhTienCap;