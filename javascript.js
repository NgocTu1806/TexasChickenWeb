var ROOT = "https://texaschickenvn.com/";  var ROOT_MOD = "https://texaschickenvn.com/vn/tin-tuc"; var ROOT_PROD = "https://texaschickenvn.com/vn/thuc-don"; var url = "https://texaschickenvn.com/vn/tin-tuc"; var actmod = ""; var DIR_IMAGE = "https://texaschickenvn.com/skins/default/images"; var cmd= "vnTRUST";  var lang = "vn";  var mem_id = 0; var js_lang = new Array(); js_lang['mess_logout'] = "Bạn có muốn thoát không ?"; js_lang['view_more_content'] = ''; js_lang['announce'] = "Thông báo"; js_lang['error'] = "Báo lỗi"; js_lang['empty_link_mem'] = 'Không tìm thấy link thành viên. Vui lòng liên hệ ban quản trị qua số điện thoại 0123456789 để được hỗ trợ'; var fId = "1305829822896074"; var gId = ""; var g_clientId = ""; var phone = '(096) 310 1049'; var emailChat = 'info.texaschicken@fb.mesa.vn'; var fbchat = 'https://m.me/TexaschickenVN'; var zalochat = 'https://zalo.me/884340211286408960'; var skypechat = 'skype:01234567899?call'; var time_loading = parseInt();

var arr_cat = {19: 'https://texaschickenvn.com/vn/com-ga', 18: 'https://texaschickenvn.com/vn/myytexaschicken', 13: 'https://texaschickenvn.com/vn/ga-sot-bo-toi-thao-moc', 1: 'https://texaschickenvn.com/vn/combo-ga-ran-1-nguoi', 2: 'https://texaschickenvn.com/vn/combo-ga-ran-2-nguoi', 3: 'https://texaschickenvn.com/vn/combo-gia-dinh-va-ban-be', 4: 'https://texaschickenvn.com/vn/combo-tiet-kiem', 6: 'https://texaschickenvn.com/vn/set-ga-ran-co-xuong', 7: 'https://texaschickenvn.com/vn/cac-mon-ga-ran', 9: 'https://texaschickenvn.com/vn/burger', 11: 'https://texaschickenvn.com/vn/banh-cuon', 14: 'https://texaschickenvn.com/vn/cac-mon-an-kem'};
var arr_title_cat = {0: '', 19: 'CƠM GÀ', 18: 'MỲ Ý', 13: 'GÀ SỐT BƠ TỎI &amp; THẢO MỘC', 1: 'COMBO GÀ RÁN (1 NGƯỜI)', 2: 'COMBO GÀ RÁN (2 NGƯỜI)', 3: 'COMBO GIA ĐÌNH &amp; BẠN BÈ', 4: 'COMBO TIẾT KIỆM', 6: 'SET GÀ RÁN CÓ XƯƠNG', 7: 'CÁC MÓN GÀ RÁN', 9: 'BURGER', 11: 'BÁNH CUỘN', 14: 'CÁC MÓN ĂN KÈM'};


var arr_input = ['p','catID','price','status_id','statusID','brand_id','bID','event_id','eventID','sort','vpage'];

// Function to validate the search form
function checkSearch(form) {
    const keyword = form.keyword.value.trim();
    if (!keyword || keyword.length < 2) {
        alert("Vui lòng nhập từ khóa tối thiểu 2 ký tự.");
        return false;
    }
    return true;
}

// Function to handle email subscription form submission
document.addEventListener("DOMContentLoaded", () => {
    const mailListForm = document.getElementById("fMaillList");
    if (mailListForm) {
        mailListForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            const emailInput = document.getElementById("f_email");
            const email = emailInput.value.trim();

            if (!email || !validateEmail(email)) {
                alert("Vui lòng nhập email hợp lệ.");
                return;
            }

            // Simulate AJAX request
            fetch("https://texaschickenvn.com/load_ajax.php?do=box_maillist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `f_email=${encodeURIComponent(email)}`,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.ok) {
                        alert("Đăng ký thành công!");
                        emailInput.value = ""; // Clear the input field
                    } else {
                        alert("Đăng ký thất bại. Vui lòng thử lại.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Có lỗi xảy ra. Vui lòng thử lại.");
                });
        });
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}