/**
 * Sơ đồ 3 khối
 * Đầu vào: Điểm chuẩn, khu vực, đối tượng, Điểm môn thứ nhất, điểm môn thứ 2, điểm môn thứ 3
 * Xử lí: 1. có 1 trong 3 môn điểm 0 sẽ rớt
 *        2. điểm tổng bé hơn điểm chuẩn sẽ rớt
 *        3. Điểm tổng lớn hơn điểm chuẩn sẽ đậu
 * Đầu ra: Cho biết đậu hay rớt, tổng điểm, nguyên nhân đậu rớt
 * 
 */
function quanLiTuyenSinh(){
    var diemChuan = document.getElementById("diemChuan").value*1;
    var khuVuc = document.getElementById("khuVuc").value*1;
    var doiTuong = document.getElementById("doiTuong").value*1;
    var diemMonThu1 = document.getElementById("diemMonThu1").value*1;
    var diemMonThu2 = document.getElementById("diemMonThu2").value*1;
    var diemMonThu3 = document.getElementById("diemMonThu3").value*1;
    var txtKetQua = document.querySelector(".txtKetQua");
    var tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + khuVuc + doiTuong;
        if(diemChuan > 30){
            alert("Điểm chuẩn nhập vào chưa đúng")
        }
        if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
            txtKetQua.innerHTML = `RỚT vì có điểm liệt. Tổng điểm là ${tongDiem}` ;
        } else if(tongDiem < diemChuan){
            txtKetQua.innerHTML = `RỚT vì tổng điểm là ${tongDiem} bé hơn điểm chuẩn là ${diemChuan}`;
        } else txtKetQua.innerHTML = `ĐẬU vì tổng điểm là ${tongDiem} lớn hơn điểm chuẩn là ${diemChuan}` 
    
}
document.querySelector(".btnKetQua").onclick = quanLiTuyenSinh;
