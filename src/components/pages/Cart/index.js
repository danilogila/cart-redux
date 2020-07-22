import React from 'react';
import { connect } from 'react-redux'
import { MdRemove, MdAdd, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../../store/modules/cart/actions'

function Cart({cart, dispatch}) {
    function increment(product){
        dispatch(CartActions.updateAmount(product.id, product.amount + 1))
    }

    function decrement(product){
       dispatch(CartActions.updateAmount(product.id, product.amount - 1))
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>total</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( product => (
                        <tr key={product.id}>
                        <td>
                            <img src={product.image} alt="Produto" />
                            <strong>{product.title}</strong>
                            <p>#{product.id}</p>
                            <section>
                                <span>Size: {product.size}</span>
                                <span>Color: {product.color}</span>
                            </section>
                        </td>
                        <td>
                            <span>R${product.price}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button" onClick={() => decrement(product)}>
                                    <MdRemove size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={product.amount} />
                                <button type="button" onClick={() => increment(product)}>
                                    <MdAdd size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$121212</strong>
                        </td>
                        <td>
                            <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))}>
                                <MdDelete size={20} color="#7159c1"/>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">
                    Finalizar pedido
                </button>
                <Total>
                    <span>Total</span>
                    <strong>R$ 111111</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart)
