import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    console.log(isAuth);

    return (
        <>
            {isAuth ? (
                <Button
                    className="btn btn-secondary"
                    onClick={onLogOut}
                    name={"Выйти из системы"}
                />
            ) : (
                <Button
                    className="btn btn-primary me-3"
                    onClick={onLogin}
                    name={"Войти"}
                />
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
