// Điền id ở line 31 xác định vị trí in ra các sản phẩm
// Import file này vào trang danh sách sản phẩm

fetch('template.json')
.then(response => response.json())
.then(data => {
    const products = data; // Lưu dữ liệu vào biến products

    document.getElementById('search-bar').addEventListener('keyup', (e) => {
        const searchData = e.target.value.trim().toLowerCase(); // Chuẩn hóa và chuyển đổi thành chữ thường
        const searchWords = searchData.split(' '); // Tách thành các từ riêng biệt

        const filteredData = products
            .map((item) => {
                const titleWords = item.title.toLowerCase().split(' ');
                const matchCount = searchWords.reduce((count, word) => {
                    return count + (titleWords.includes(word) ? 1 : 0);
                }, 0);
                return { ...item, matchCount }; // Thêm thuộc tính matchCount vào mỗi sản phẩm
            })
            .filter(item => item.matchCount > 0) // Lọc ra những sản phẩm có ít nhất 1 từ khóa trùng khớp
            .sort((a, b) => b.matchCount - a.matchCount); // Sắp xếp theo số từ khóa trùng khớp giảm dần

        displayItem(filteredData);
    });

    displayItem(products); // Hiển thị sản phẩm ban đầu
})
.catch(error => console.error('Error loading products', error));

const displayItem = (items) => {
document.getElementById('Điền id vào đây').innerHTML = items.map((item) => {
    var { image = 'https://via.placeholder.com/150', title = '', price = 0, sold = 0 } = item; // Mặc định nếu không có image, title hoặc price
    return (
        `<div class='box-item'>
            <img class='item-image' src=${image}></img>
            <div class='item-body'>
                <h2>${title}</h2>
                <h2>$${price}</h2>
                <h3>Đã bán ${sold}</h3>
            </div>
        </div>`
    )
}).join('')
};