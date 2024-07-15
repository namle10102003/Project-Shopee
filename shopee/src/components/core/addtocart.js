// addtocart.js

// Hàm lấy toàn bộ giỏ hàng của user
export function getCart(userId) {
    const storedCart = localStorage.getItem(`${userId}_cart`);
    return storedCart ? JSON.parse(storedCart) : [];
}

// Hàm lưu giỏ hàng của user vào localStorage
function saveCart(cartData, userId) {
    localStorage.setItem(`${userId}_cart`, JSON.stringify(cartData));
}

// Hàm thêm sản phẩm vào giỏ hàng của user
export function addToCart(product, userId) {
    let cartData = getCart(userId);

    // Tính toán tổng tiền cho sản phẩm (quantity * price)
    product.totalPrice = product.price * product.quantity;

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProductIndex = cartData.findIndex(item => item.productId === product.productId);

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng và cập nhật tổng tiền
        cartData[existingProductIndex].quantity += product.quantity;
        cartData[existingProductIndex].totalPrice += product.totalPrice;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
        cartData.unshift(product);
    }

    saveCart(cartData, userId); // Lưu giỏ hàng vào localStorage
}

// Hàm xóa sản phẩm khỏi giỏ hàng của user
export function removeFromCart(productId, userId) {
    let cartData = getCart(userId);
    cartData = cartData.filter(item => item.productId !== productId);
    saveCart(cartData, userId); // Lưu giỏ hàng vào localStorage
}

export function updateCartItemQuantity(productId, userId, newQuantity) {
    let cartData = getCart(userId);
    const productIndex = cartData.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
        cartData[productIndex].quantity = newQuantity;
        cartData[productIndex].totalPrice = cartData[productIndex].price * newQuantity;
        saveCart(cartData, userId);
    }

    return cartData;
}