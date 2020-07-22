import React from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
import { connect } from 'react-redux'

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png'

function Header({cart}) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Cart</strong>
                    <span>{cart.length} items</span>
                </div>

                <FaShoppingBag size={36} color="#333" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cart: state.cart
}))(Header)
