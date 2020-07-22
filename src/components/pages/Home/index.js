import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as CartAction from '../../../store/modules/cart/actions'

import { ProductList } from './styles';
import api from '../../../services/api'


class Home extends Component {

    state = {
        products: []
    }

    handleAddProduct(product){
        const { dispatch } = this.props
        dispatch(CartAction.addToCart(product))
    }

    async componentDidMount(){
        const {data: products} = await api.get("/products")
        this.setState({
            products
        })
    }
    render() {
        let { products } = this.state
        return (
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title}/>
                        <strong>{product.title}</strong>
                        <span>$ {product.price}</span>
                        <div>
                            <span>Size: {product.size}</span>
                            <span>Color: {product.color}</span>
                        </div>
                        <button type="button" onClick={() => this.handleAddProduct(product)}>
                            <span>
                                Add to cart
                            </span>
                        </button>
                    </li>
                ))}
            </ProductList>
        )
    }
}

export default connect()(Home)
