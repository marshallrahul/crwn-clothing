import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { selectToggleCartHidden } from "../../redux/cart/cart.selector";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <div className="logo__box">
            <Link to="/">
                <Logo className="logo" />
            </Link>
        </div>
        <div className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/shop">SHOP</Link>
                </li>
                <li className="header__item">
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li className="header__item">
                    {
                        currentUser ?
                            <div style={{ cursor: 'pointer' }} onClick={() => auth.signOut()}>SIGN OUT</div>
                            : <Link to="/user">SIGN IN</Link>
                    }
                </li>
                <li className="header__item">
                    <CartIcon />
                </li>
            </ul>
        </div>
        {
            hidden ? <CartDropdown /> : null
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectToggleCartHidden
})

export default connect(mapStateToProps)(Header);