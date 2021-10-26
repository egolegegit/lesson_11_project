import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    console.log(isAuth);

    return (
        <>
            <button className="btn btn-primary me-3" onClick={onLogin}>
                Войти
            </button>
            <button className="btn btn-secondary" onClick={onLogOut}>
                Выйти из системы
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
