const songuyen = [];

document.getElementById("save").onclick = function (event) {
    event.preventDefault();

    const number = document.getElementById("number").value * 1;
    if (Number.isInteger(number)) {
        songuyen.push(number);
    } else {
        alert("❌ Vui lòng nhập số nguyên!");
    }

    document.getElementById("shownumber").innerHTML = `${songuyen.join(" , ")}`

    /**
     *câu số 1: tính tổng số dương trong mảng
     * Đầu vào:
     * - user nhập vào
     * - mảng lưu từ user
     * 
     * xử lý: 
     * tạo vòng lặp tính tổng số dương lần lượt qua các thành phần của mảng
     * 
     * đầu ra:
     * - xuất ra màn hình tổng số dương
     */

    document.getElementById("btnsum").onclick = function () {
        let sum = 0
        for (let i = 0; i < songuyen.length; i++) {
            const number = songuyen[i];

            if (number > 0) {
                sum += number;
            }
        }

        document.getElementById("sumnumber").innerHTML = "Tổng số dương trong mảng là: " + sum

    }

    /**
 *câu số 2: tính tổng số lượng số dương trong mảng
 * Đầu vào:
 * - user nhập vào
 * - mảng lưu từ user
 * 
 * xử lý: 
 * tạo vòng lặp đếm số dương lần lượt qua các thành phần của mảng
 * 
 * đầu ra:
 * - xuất ra màn hình có bao nhiêu số dương
 */

    document.getElementById("btncount").onclick = function () {
        let count = 0;
        for (let i = 0; i < songuyen.length; i++) {
            const number = songuyen[i];

            if (number > 0) {
                count += 1;
            }
        }
        document.getElementById("countnumber").innerHTML = "Có " + count + " số dương trong mảng"
    }


    /**
     * câu số 3: Tìm số nhỏ nhất trong mảng:
     * 
     * Đầu vào:
     * - user nhập
     * 
     * Xử lý:
     *  - gán số đầu tiên là nhỏ nhất
     * - tạo vòng lặp so sánh lần lượt với các số khác trong mảng
     *  
     * đầu ra:
     * - xuất ra màn hình số nhỏ nhất
     */

    document.getElementById("btnmin").onclick = function () {
        let min = songuyen[0];

        for (let i = 1; i < songuyen.length; i++) {
            if (min > songuyen[i]) {
                min = songuyen[i];
            }
        }
        document.getElementById("minnumber").innerHTML = "Số nhỏ nhất là: " + min;
    }


    /**
         * câu số 4: Tìm số dương nhỏ nhất trong mảng:
         * 
         * Đầu vào:
         * - user nhập
         * 
         * Xử lý:
         *  - gán số đầu tiên là nhỏ nhất
         * - tạo vòng lặp so sánh lần lượt với các số khác trong mảng. thêm điều kiện && trong if số kiện tại >0
         *  
         * đầu ra:
         * - xuất ra màn hình số nhỏ nhất
         */

    document.getElementById("btnminduong").onclick = function () {
        let min = songuyen[0];

        for (let i = 1; i < songuyen.length; i++) {
            if (min > songuyen[i] && songuyen[i] > 0) {
                min = songuyen[i];
            }
        }
        document.getElementById("minnumberduong").innerHTML = "Số dương nhỏ nhất là: " + min;
    }

    /**
            * câu số 5: Tìm số chẵn cuối cùng trong mảng:
            * 
            * Đầu vào:
            * - user nhập
            * 
            * Xử lý:
            * -  tạo biến số chẵn cuối cùng = -1
            * - dùng for chạy lần lượt từng phần tử mảng, dùng if lấy giá trị số chẵn gán lại cho biến  
            *  
            * đầu ra:
            * - xuất ra màn hình số chẵn cuối cùng trong mảng
            */

    document.getElementById("btnsochan").onclick = function () {
        let sochan = -1;

        for (let i = 1; i < songuyen.length; i++) {
            if (songuyen[i] % 2 === 0) {
                sochan = songuyen[i];
            }
        }
        document.getElementById("sochan").innerHTML = "Số chẵn cuối cùng trong mảng là: " + sochan;
    }

    /** câu số 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
    * Đầu vào:
    * - user nhập
    * 
    * Xử lý:
     *  gắn vị trí cũ = tạm
     * mới = cũ
     * cũ = tạm
     *  
     * đầu ra:
     * - xuất ra màn hình dãy số mới
     */

    document.getElementById("btndoivitri").onclick = function (event) {
        event.preventDefault();
        const arraydoivitri = [...songuyen]

        const indexcu1 = document.getElementById("indexcu1").value * 1;
        const indexmoi1 = document.getElementById("indexmoi1").value * 1;

        let tam = arraydoivitri[indexcu1 - 1];
        arraydoivitri[indexcu1 - 1] = arraydoivitri[indexmoi1 - 1];
        arraydoivitri[indexmoi1 - 1] = tam;

        document.getElementById("doivitri").innerHTML = "Mảng mới sau khi đổi vị trí là: " + arraydoivitri.join(" , ");
    }


    /** câu số 7: Sắp xếp mảng theo thứ tự tăng dần.
     * Đầu vào:
     * - user nhập
     * 
     * Xử lý:
     *  - tạo 2 vòng lặp for
     * - điều kiện if so sánh 2 giá trị
     * - hoán vị sắp xếp
      *  
      * đầu ra:
      * - xuất ra màn hình dãy số mới đã sắp xếp
      */

    document.getElementById("btnsapxep").onclick = function () {

        for (let i = 0; i < songuyen.length; i++) {
            for (let j = i + 1; j < songuyen.length; j++) {
                if (songuyen[i] > songuyen[j]) {
                    let tam = songuyen[i];
                    songuyen[i] = songuyen[j];
                    songuyen[j] = tam;
                }
            }
        }


        document.getElementById("sapxep").innerHTML = "Mảng mới sau khi sắp xếp là:" + songuyen;
    }


    /** câu số 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
             * Tìm số nguyên tố đầu tiên trong mảng:
             * 
             * Đầu vào:
             * - user nhập
             * 
             * Xử lý:
             *  - gán biến số nguyên tố = -1
             * - tạo vòng lặp so sánh lần lượt với các số khác trong mảng.
             * - điều kiện if là chia hết cho chính nó
             *  
             * đầu ra:
             * - xuất ra màn hình số nguyên tố đầu tiên trong mảng
             */

    document.getElementById("btnnguyento").onclick = function () {

        function songuyento(n) {
            if (n <= 1) {
                return false
            } else {
                for (let i = 2; i < n; i++) {
                    if (n % 2 === 0) {
                        return false
                    }
                }
            }
            return true
        }

        let nguyento = -1;

        for (let i = 0; i < songuyen.length; i++) {
            if (songuyento(songuyen[i])) {
                nguyento = songuyen[i];
                break
            }
        }
        document.getElementById("ngueynto").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + nguyento;
    }


    /**
     * Câu số 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
     * đầu vào:
     * - mảng cũ
     * - user nhập thêm số thực vào
     * 
     * xử lý:
     * push  thêm vào mảng dãy số mới
     * tạo vòng lặp xét lần lượt phần tử của mảng, điều kiện là số nguyên thì cộng tích luỹ vào biến count
     * 
     * đầu ra:
     * tìm tổng số nguyên trong mảng
     */



    const arraysothuc = [...songuyen];

    document.getElementById("addsothuc").onclick = function (event) {
        event.preventDefault();

        const sothuc = document.getElementById("sothuc").value * 1;
        arraysothuc.push(sothuc);

        document.getElementById("daysothuc").innerHTML = "Dãy phần tử mới là:   " + arraysothuc.join(" , ")
    }


    document.getElementById("btnsothuc").onclick = function () {

        let count = 0;
        for (let i = 0; i < arraysothuc.length; i++) {
            if (Number.isInteger(arraysothuc[i])) {
                count += 1;
            }
        }
        document.getElementById("demsonguyen").innerHTML = "tổng số nguyên hiện tại là: " + count
    }


    /**
     * Câu số 10: So sánh số lượng số dương và số lượng số âm
     * 
     * đầu vào:
     * đã có từ trên
     * 
     * xử lý:
     * - tính tổng số dương
     * - tính tổng số âm
     * - so sanh với nhau
     * 
     * đầu ra:
     * kết quả cái nào nhiều hơn
     */
    document.getElementById("btnsosanh").onclick = function () {
        let soduong = 0;
        let soam = 0;

        for (let i = 0; i < songuyen.length; i++) {
            if (songuyen[i] > 0) {
                soduong += 1;
            }

            if (songuyen[i] < 0) {
                soam += 1;
            }
        }

        if (soduong > soam) {
            document.getElementById("sosanh").innerHTML = "Số lượng số dương nhiều hơn"
        } else if (soduong === soam) {
            document.getElementById("sosanh").innerHTML = "cả 2 bằng nhau"
        } else {
            document.getElementById("sosanh").innerHTML = "Số lượng số âm nhiều hơn"
        }
    }

}

