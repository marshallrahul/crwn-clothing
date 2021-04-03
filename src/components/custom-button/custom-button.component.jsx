import React from 'react';

import "./custom-button.style.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button className={`custom-button ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "isGoogleSignIn" : ""}`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;