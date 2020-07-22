import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
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

                <MdShoppingCart size={36} color="#333" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cart: state.cart
}))(Header)
