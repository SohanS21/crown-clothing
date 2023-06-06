import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from "../../context/userContext"
import { CartContext } from "../../context/cart"

import { signOutUser } from "../../utils/firebase/firebase"

import CartIcon from "../../components/cart-icon/cart-icon"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown"
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
  } from './navigationStyles.jsx';

const Navigation = () =>{

    const {currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ):(
                            <NavLink to='/auth'>SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                   
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation