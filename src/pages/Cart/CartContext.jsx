import React from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Them sp vao gio hang
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((p) => p.id === product.id);
            if (existingProduct) {
                return prevCart.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Cap nhat so luong san pham
    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((p) =>
                p.id === productId ? { ...p, quantity: Math.max(1, quantity) } : p
            )
        );
    };

    // Xoa sp khoi gio hang
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
    };

    // Xóa toàn bộ giỏ hàng
    const clearCart = () => {
        setCart([]);
    };

    // Dem tong so san pham trong gio hang
    const totalItems = cart.length;

    // Tính tổng giá trị giỏ hàng
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng
    const isProductInCart = (productId) => {
        return cart.some((p) => p.id === productId);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                isProductInCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);