import { useState } from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartContent from '../components/CartContent'
import Category from '../components/Category';
import Price from '../components/Price';
import Sorting from '../components/Sorting';

const Cart = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleAddToCart = (productToAdd, count) => {
        const newCartItem = {
            ...productToAdd,
            cartCount: count // 장바구니에 담은 수량
        };

        // 장바구니 state 업데이트
        setCart(prevCart => [...prevCart, newCartItem]);
    };
    const COMPONENT__TO_RENDER = {
        category: <Category addToCart={handleAddToCart}/>,
        price: <Price addToCart={handleAddToCart}/>,
        sorting: <Sorting addToCart={handleAddToCart}/>,
        home : <Content />,
    }

    return (
        <div>
            <Navbar changePage={handlePageChange} currentPage={currentPage} />
            <div className="pt-[60px]">
                <CartContent>
                    {COMPONENT__TO_RENDER[currentPage]}
                </CartContent>
            </div>
            <Footer />
        </div>

    )
}

export default Cart;
