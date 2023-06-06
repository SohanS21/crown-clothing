import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

import { CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
    <CartIconContainer onClick={toogleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
    )
}

export default CartIcon