// Lấy các phần tử DOM
const easyInput1 = document.querySelector('#easy__input-x');
const easyInput2 = document.querySelector('#easy__input-y');
const easyResult = document.querySelector('.easy__result');

// Lấy tất cả các nút toán tử
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');
const xBtn = document.querySelector('.multi'); // đổi tên biến để dễ đọc hơn
const divBtn = document.querySelector('.division');
const easyButton = document.querySelector('#easy__button'); // Nút này có vẻ đang trùng lặp chức năng với `xBtn`

// --- Hàm xử lý chung cho các phép toán ---
function calculateAndDisplay(operator) {
    // 1. Lấy và chuyển đổi giá trị đầu vào
    const inputValue1 = Number(easyInput1.value);
    const inputValue2 = Number(easyInput2.value);

    // 2. Kiểm tra tính hợp lệ của đầu vào
    // Sử dụng isNaN để kiểm tra nếu giá trị không phải là số hợp lệ
    // và kiểm tra rỗng (empty string)
    if (easyInput1.value.trim() === '' || isNaN(inputValue1) ||
        easyInput2.value.trim() === '' || isNaN(inputValue2)) {
        easyResult.textContent = 'Vui lòng nhập giá trị số hợp lệ vào cả hai ô!';
        return; // Dừng hàm nếu đầu vào không hợp lệ
    }

    let result;
    let operationSymbol; // Biểu tượng toán học (+, -, *, /)

    // 3. Thực hiện phép toán dựa trên toán tử được truyền vào
    switch (operator) {
        case 'add':
            result = inputValue1 + inputValue2;
            operationSymbol = '+';
            break;
        case 'sub':
            result = inputValue1 - inputValue2;
            operationSymbol = '-';
            break;
        case 'multi': // Đổi tên case cho đồng bộ với tên biến và class
            result = inputValue1 * inputValue2;
            operationSymbol = '*';
            break;
        case 'division':
            if (inputValue2 === 0) { // Xử lý trường hợp chia cho 0
                easyResult.textContent = 'Không thể chia cho 0!';
                return;
            }
            result = inputValue1 / inputValue2;
            operationSymbol = '/';
            break;
        default:
            easyResult.textContent = 'Toán tử không hợp lệ.';
            return;
    }

    // 4. Hiển thị kết quả
    // Đã thay đổi "The area of the rectangle is:" thành mô tả chung hơn
    easyResult.textContent = `Kết quả: ${inputValue1} ${operationSymbol} ${inputValue2} = ${result}`;
}

// --- Gắn sự kiện cho các nút ---
addBtn.addEventListener('click', () => calculateAndDisplay('add'));
subBtn.addEventListener('click', () => calculateAndDisplay('sub'));
xBtn.addEventListener('click', () => calculateAndDisplay('multi'));
divBtn.addEventListener('click', () => calculateAndDisplay('division'));

// Nếu easyButton cũng thực hiện phép nhân, có thể gán như sau:
easyButton.addEventListener('click', () => calculateAndDisplay('multi')); // Hoặc loại bỏ nếu không cần thiết



