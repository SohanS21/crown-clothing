import './productCard.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

import Button from '../button/button'

const ProductCard = ({product}) =>{
    const {addItemToCart} = useContext(CartContext);
    const {name,price,imageUrl} = product;

    const addProductToCart = () => addItemToCart(product)
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt=''/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>

        </div>
    )
}
export default ProductCard;