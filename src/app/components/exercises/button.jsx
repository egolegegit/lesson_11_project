import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, onClick }) => {
    return (
        <button className="btn btn-primary me-3" onClick={onClick}>
            {name}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
